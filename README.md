# Árukergető — Mini számítógép konfigurációk 🖥️

> **React újraimplementáció** — Eredeti Bootstrap HTML oldal átültetése React + Vite környezetbe, Coolify-ra kész Docker konténerizálással.

---

## 📋 Projekt áttekintés

Ez a projekt a **„Minigépek”** iskolai webes feladat React-alapú újraírása. Az oldal mini számítógép (mini PC) konfigurációkat hasonlít össze, napi ajánlatokat, forgalmazói listát és kapcsolati információkat jelenít meg.

### Eredeti projekt
| Tulajdonság | Érték |
|---|---|
| **Eredeti technológia** | Bootstrap 5 + HTML + CSS |
| **Téma** | Mini PC összehasonlító oldal |
| **Oldalak** | Kezdőlap (`index.html`), Apple részletek (`apple.html`) |
| **Készítő** | Czikkely Imre, 10.E |
| **Dátum** | 2026.05.20. |

### React verzió
| Tulajdonság | Érték |
|---|---|
| **Keretrendszer** | React 18 + Vite 5 |
| **UI könyvtár** | React-Bootstrap 2.10 |
| **Routing** | React Router 6 |
| **Node.js** | ≥ 18 |
| **Konténer** | Docker (nginx + statikus fájlok) |
| **Deploy** | Coolify (bármilyen Docker-kompatibilis PaaS) |

---

## 🗂️ Projekt szerkezet

```
minigepek-react/
├── public/
│   └── images/              # Termékképek (7 db .jpg)
├── src/
│   ├── components/           # Újrafelhasználható React komponensek
│   │   ├── Navbar.jsx        # Navigációs sáv
│   │   ├── Hero.jsx          # Oldal fejléc (Árukergető címsor)
│   │   ├── Alert.jsx         # Kupon figyelmeztetés
│   │   ├── ProductCard.jsx   # Termékkártya
│   │   ├── ComparisonTable.jsx # Összehasonlító táblázat
│   │   ├── Distributors.jsx  # Forgalmazói lista
│   │   ├── Contact.jsx       # Kapcsolat kártyák
│   │   └── Footer.jsx        # Lábléc (szerző, osztály, dátum)
│   ├── data/
│   │   └── products.js       # Termékadatok és szövegek
│   ├── pages/
│   │   ├── Home.jsx          # Kezdőlap
│   │   └── AppleDetail.jsx   # Apple termék részletes oldala
│   ├── App.jsx               # Router konfiguráció
│   ├── App.css               # Stílusok (átemelve a sajat.css-ből)
│   └── main.jsx              # Belépési pont
├── index.html                # Vite HTML sablon
├── vite.config.js            # Vite konfiguráció
├── Dockerfile                # Többlépcsős Docker build
├── nginx.conf                # Nginx konfig (SPA routing támogatás)
├── docker-compose.yml        # Helyi fejlesztéshez / teszteléshez
├── package.json
└── README.md                 # Ez a dokumentáció
```

---

## 🚀 Gyors indítás (helyi fejlesztés)

```bash
# Függőségek telepítése
npm install

# Fejlesztői szerver indítása (http://localhost:3000)
npm run dev

# Production build
npm run build

# Build előnézete
npm run preview
```

---

## 🐳 Docker / Coolify telepítés

### Helyi Docker build és futtatás

```bash
# Build
docker build -t minigepek-react .

# Futtatás
docker run -d -p 8080:80 --name minigepek minigepek-react

# Böngészőben: http://localhost:8080
```

### docker-compose

```bash
docker compose up -d
```

### Coolify beállítás

1. **Coolify dashboard** → New Service → **Public Git Repository**
2. Add meg a repo URL-jét (GitHub/GitLab)
3. Coolify automatikusan detektálja a `Dockerfile`-t
4. Állítsd be a portot: **80** (belső), és válassz egy külső portot (pl. 8080)
5. Ha domaint szeretnél: add meg a domaint a Coolify proxy beállításainál
6. Kattints a **Deploy** gombra

Alternatív megoldásként használhatod a **Docker Compose** opciót is Coolify-ban — a `docker-compose.yml` fájl már készen van.

---

## 📄 Oldalak és funkciók

### Kezdőlap (`/`)
- Navigációs sáv (reszponzív, hamburger menü mobilon)
- Hero fejléc (Árukergető cím, alcím)
- Kupon-értesítő sáv (PETRIK-15)
- Napi ajánlatok — 4 termékkártya (ASUS, UMAX, Apple, Intel)
- Összehasonlító táblázat — specifikációk összevetése
- Forgalmazói lista
- Kapcsolat (cím + email/telefon)
- Lábléc (szerző, osztály, dátum)

### Apple részletek (`/apple`)
- Részletes Apple Mac Studio adatlap
- Specifikációk (CPU, processzor, RAM, SSD)
- Képgaléria (4 nézet: elöl, hátul, alul, felül)

---

## 🎨 Stílusok

A stílusok az eredeti `sajat.css`-ből lettek átemelve (`App.css`-be):

| Szabály | Leírás |
|---|---|
| `html { overflow-y: scroll; }` | Mindig látszik a scrollbar |
| `body { background-color: #AFAFAF; }` | Szürke háttér |
| `.akcio` | Piros, félkövér, aláhúzott akciós ár |
| `#oldalcim` | 300% méret, nagybetűs, dőlt főcím |
| `.hero-section` | Bootstrap `bg-info` + fehér szöveg |
| `.product-card` | Hover animáció a termékkártyákon |

---

## 🔧 Technikai döntések

| Döntés | Indoklás |
|---|---|
| **Vite** (nem CRA) | Gyorsabb build, kisebb bundle, modernebb |
| **React-Bootstrap** | Bootstrap komponensek React-ben JSX-szerűen használhatók |
| **Nginx alapú Docker image** | Könnyű, gyors, SPA routingot natívan támogatja |
| **Adatok külön fájlban** (`data/products.js`) | Könnyen bővíthető, akár API-ról is jöhet később |
| **Többlépcsős Docker build** | Kis méretű végleges image (~25 MB) |

---

## 📝 Fejlesztői jegyzetek

### Eredeti feladat számozás
Az eredeti HTML fájlokban kommentek jelölik a feladatokat (pl. `<!-- 1.1 feladat -->`). Ezek a funkciók a React verzióban:

| Feladat | Eredeti hely | React megfelelő |
|---|---|---|
| 1.1–1.3 | CSS/JS betöltés | `main.jsx` (Bootstrap CSS import) |
| 1.4–1.6 | HTML head | `index.html` |
| 2.1–2.2 | Navbar | `Navbar.jsx` |
| 2.3 | Hero | `Hero.jsx` |
| 3.1 | Alert | `Alert.jsx` |
| 3.2–3.3 | Napi ajánlatok | `ProductCard.jsx` |
| 3.4–3.5 | Összehasonlítás | `ComparisonTable.jsx` |
| 3.6 | Forgalmazók | `Distributors.jsx` |
| 3.7 | Kapcsolat | `Contact.jsx` |
| 3.8 | Lábléc | `Footer.jsx` |
| 4. | Apple oldal | `AppleDetail.jsx` |
| 5.1–5.5 | CSS stílusok | `App.css` |

---

## 📦 Függőségek

| Csomag | Verzió | Cél |
|---|---|---|
| `react` | ^18.3 | UI keretrendszer |
| `react-dom` | ^18.3 | DOM renderelés |
| `react-router-dom` | ^6.26 | Kliensoldali routing |
| `bootstrap` | ^5.3 | CSS keretrendszer |
| `react-bootstrap` | ^2.10 | Bootstrap React komponensek |
| `vite` | ^5.4 | Build eszköz |
| `@vitejs/plugin-react` | ^4.3 | React támogatás Vite-hez |

---

## 📄 Licenc

Oktatási projekt — szabadon felhasználható.
