import { DocSection } from './DocComponents';

export default function OverviewDocs() {
  return (
    <DocSection id="overview" title="📋 Áttekintés">
      <div className="alert alert-info">
        <strong>📚 Bootstrap 5 + CSS Gyorsreferencia</strong><br />
        Ez az oldal a Bootstrap 5 keretrendszer komponenseit, segédosztályait
        és gyakori CSS mintákat mutatja be — kódpéldákkal és élő előnézetekkel.
        Minden példa azonnal másolható és kipróbálható.
      </div>

      <h4>Miről szól ez a dokumentáció?</h4>
      <p>
        A Bootstrap 5 az egyik legnépszerűbb CSS keretrendszer. Ez a dokumentáció
        segít gyorsan megtalálni a szükséges osztályokat és komponenseket anélkül,
        hogy a teljes hivatalos dokumentációt át kellene böngészni.
      </p>

      <h4>Technológiák</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-light">
            <tr><th>Technológia</th><th>Verzió</th><th>Szerep</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Bootstrap</strong></td><td>5.3</td><td>CSS keretrendszer — grid, komponensek, segédosztályok</td></tr>
            <tr><td><strong>React</strong></td><td>18</td><td>UI réteg — ebben fut a dokumentációs oldal</td></tr>
            <tr><td><strong>Vite</strong></td><td>5</td><td>Build eszköz — gyors fejlesztés és production build</td></tr>
            <tr><td><strong>Bun</strong></td><td>1.3</td><td>JavaScript runtime + package manager</td></tr>
            <tr><td><strong>Docker</strong></td><td>—</td><td>Konténerizálás (Coolify deploy-hoz)</td></tr>
          </tbody>
        </table>
      </div>

      <h4>HTML Alap Szerkezet Bootstrap-pel</h4>
      <pre className="bg-dark text-light p-3 rounded">
{`<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oldal címe</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/sajat.css">
    <script src="js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container bg-light">
        <!-- Tartalom -->
    </div>
</body>
</html>`}
      </pre>

      <h4>Dokumentált Kategóriák</h4>
      <div className="row mt-3">
        {[
          { icon: '🥾', title: 'Bootstrap 5 Referencia', desc: 'Layout, tipográfia, táblázatok, képek, űrlapok, összes komponens A-Z, segédosztályok' },
          { icon: '📐', title: 'Grid Rendszer', desc: '12-oszlopos reszponzív rács, töréspontok: sm, md, lg, xl, xxl' },
          { icon: '🔤', title: 'Tipográfia', desc: 'Fejlécek, display, szövegszínek, igazítás, stílusok' },
          { icon: '🧩', title: 'Komponensek', desc: 'Navbar, Cards, Tables, Alerts, Badges, Buttons, List Groups, Hero' },
          { icon: '🛠️', title: 'Segédosztályok', desc: 'Spacing, display, float, háttérszínek, képek, árnyékok, keretek' },
          { icon: '🎨', title: 'Egyedi CSS', desc: 'Gradiensek, árnyékok, ::first-letter, scrollbar, text-indent' },
        ].map((cat) => (
          <div className="col-sm-6 col-md-4 mb-3" key={cat.title}>
            <div className="card h-100 border-info">
              <div className="card-body">
                <h5 className="card-title">{cat.icon} {cat.title}</h5>
                <p className="card-text small text-muted">{cat.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DocSection>
  );
}
