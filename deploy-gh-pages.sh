#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────
# deploy-gh-pages.sh
#
# 1. Builds the production Docker image with docker compose
# 2. Extracts the built dist/ from the container
# 3. Force-pushes dist/ to the gh-pages branch for GitHub Pages
# ─────────────────────────────────────────────────────────────────────

set -euo pipefail

# Auto-detect Docker Compose command (v2 plugin vs v1 standalone)
if docker compose version > /dev/null 2>&1; then
  DOCKER_COMPOSE="docker compose"
elif command -v docker-compose > /dev/null 2>&1; then
  DOCKER_COMPOSE="docker-compose"
else
  echo "ERROR: Neither 'docker compose' nor 'docker-compose' found."
  exit 1
fi

REPO_NAME=$(basename "$(git rev-parse --show-toplevel 2>/dev/null)" 2>/dev/null || echo "docs")
BASE_URL="${BASE_URL:-/}"
CUSTOM_DOMAIN="${CUSTOM_DOMAIN:-}"
BRANCH="gh-pages"
COMPOSE_FILE="docker-compose.prod.yml"
TMP_DIR=".gh-pages-tmp"

# Load .env if present
if [ -f .env ]; then
  set -a; source .env; set +a
fi

echo "============================================"
echo " GitHub Pages Deploy"
echo "============================================"
echo " Repo:      $REPO_NAME"
echo " Base URL:  $BASE_URL"
if [ -n "$CUSTOM_DOMAIN" ]; then
  echo " Domain:    $CUSTOM_DOMAIN"
fi
echo " Branch:    $BRANCH"
echo "============================================"

# ── Pre-flight: ensure .env exists ─────────────────────────────────
if [ ! -f .env ]; then
  echo ""
  echo "⚠️  WARNING: No .env file found!"
  echo "   Create one from the template:"
  echo "     cp .env.example .env"
  echo ""

  if [ -f /.dockerenv ] || [ -n "${CI:-}" ] || [ ! -t 0 ]; then
    echo "   Running non-interactively — continuing without .env..."
  else
    read -rp "   Continue without .env? [y/N] " REPLY
    if [[ ! "$REPLY" =~ ^[Yy]$ ]]; then
      exit 1
    fi
  fi
fi

# ── 1. Build the production image ──────────────────────────────────
echo ""
echo "[1/4] Building production Docker image..."
export BASE_URL
$DOCKER_COMPOSE -f "$COMPOSE_FILE" build --no-cache prod

# ── 2. Extract dist/ from the built image ──────────────────────────
echo ""
echo "[2/4] Extracting dist/ from Docker image..."
IMAGE_NAME="bootstrap-docs-prod:latest"

CONTAINER_ID=$(docker create "$IMAGE_NAME" 2>/dev/null) || {
  echo "ERROR: Could not create container from image '$IMAGE_NAME'."
  echo "       Try: $DOCKER_COMPOSE -f $COMPOSE_FILE build prod"
  exit 1
}

rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR"
docker cp "$CONTAINER_ID:/app/dist/." "$TMP_DIR/"
docker rm "$CONTAINER_ID" > /dev/null

echo "  → Extracted $(find "$TMP_DIR" -type f | wc -l) files"

# ── 3. Push dist/ directly to gh-pages branch (no local checkout) ──
echo ""
echo "[3/4] Pushing dist/ to origin/$BRANCH..."

# Build a fresh commit from the dist files in a temp git repo
(
  cd "$TMP_DIR"

  # Need the remote URL from the parent repo
  REMOTE_URL=$(git -C .. remote get-url origin 2>/dev/null || echo "")

  git init -b "$BRANCH"
  git config user.name  "${GIT_USER_NAME:-CI Bot}"
  git config user.email "${GIT_USER_EMAIL:-ci@localhost}"

  # Ensure nojekyll (GitHub Pages won't process _underscore dirs otherwise)
  touch .nojekyll

  # Write CNAME for custom domain
  if [ -n "$CUSTOM_DOMAIN" ]; then
    echo "$CUSTOM_DOMAIN" > CNAME
    echo "  → CNAME set to $CUSTOM_DOMAIN"
  fi

  git add -A .
  git commit -m "🚀 Deploy $(date -u +'%Y-%m-%d %H:%M UTC')" || {
    echo "  → Nothing to commit (already up to date)"
  }

  # Push directly to gh-pages (no local branch switch needed)
  echo "  → Force-pushing to origin/$BRANCH..."
  git push "$REMOTE_URL" "$BRANCH:$BRANCH" --force
)

rm -rf "$TMP_DIR"

# ── 4. Done ───────────────────────────────────────────────────────
echo ""
echo "[4/4] Done."

echo ""
if [ -n "$CUSTOM_DOMAIN" ]; then
  echo "============================================"
  echo " ✅ Deployed to GitHub Pages!"
  echo "    https://$CUSTOM_DOMAIN/"
  echo "============================================"
else
  echo "============================================"
  echo " ✅ Deployed to GitHub Pages!"
  echo "    https://<user>.github.io/$REPO_NAME/"
  echo "============================================"
fi
