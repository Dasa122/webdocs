#!/bin/sh
# ──────────────────────────────────────────────────────────────────
# deploy-entrypoint.sh — runs inside the prod deploy container
# Installs needed tools, configures git, then runs deploy-gh-pages.sh
# ──────────────────────────────────────────────────────────────────
set -e

echo "============================================"
echo " GitHub Pages Deploy (docker compose up prod)"
echo "============================================"
echo ""

echo "==> Installing tools (git, bash, docker CLI)..."
apk add --no-cache git bash docker-cli docker-compose openssh-client > /dev/null 2>&1

echo "==> Configuring git..."
git config --global --add safe.directory /workspace
git config --global user.name  "${GIT_USER_NAME:-CI Bot}"
git config --global user.email "${GIT_USER_EMAIL:-ci@localhost}"
git config --global init.defaultBranch master

echo "==> Running deploy script..."
exec bash /workspace/deploy-gh-pages.sh
