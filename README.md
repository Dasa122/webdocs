# Bootstrap 5 + CSS Docs

> Interaktív Bootstrap 5 és CSS referencia — kódpéldákkal és élő előnézetekkel.

---

## 🚀 Indítás

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # Production build
```

## 🐳 Docker

```bash
docker build -t bootstrap-docs .
docker run -d -p 8080:80 bootstrap-docs
```

## ☁️ Coolify

1. Push-old fel a repo-t GitHub-ra/GitLab-ra
2. Coolify → New Service → Public Git Repository
3. A `Dockerfile` automatikusan detektálva lesz
4. Port: **80** (belső)

## 📄 Tartalom

- **Bootstrap 5 Referencia** — Layout, tipográfia, táblázatok, képek, űrlapok, összes komponens A-Z
- **Grid Rendszer** — 12-oszlopos reszponzív rács
- **Tipográfia** — Fejlécek, szövegszínek, stílusok
- **Komponensek** — Navbar, Cards, Tables, Alerts, Badges, Buttons, List Groups, Hero
- **Segédosztályok** — Spacing, display, float, háttérszínek, árnyékok
- **Egyedi CSS** — Gradiensek, árnyékok, ::first-letter, scrollbar minták

## 🔧 Stack

| Tech | Verzió |
|---|---|
| React | 18 |
| Vite | 5 |
| Bootstrap | 5.3 |
| Bun | ≥ 1.1 |
| Docker | nginx:alpine |
