import { DocSection } from './DocComponents';

export default function OverviewDocs() {
  return (
    <DocSection id="overview" title="📋 Áttekintés">
      <div className="alert alert-info">
        <strong>📚 Bootstrap + Egyedi CSS Dokumentáció</strong><br />
        Ez az oldal az összes Bootstrap komponenst, segédosztályt és egyedi CSS mintát
        dokumentálja, amely a <em>minigépek</em>, <em>turizmus</em>, <em>tömegközlekedés</em>,
        <em>hungarikum</em>, <em>web_forras</em> és <em>jegyzet</em> projektekben használatban van.
      </div>

      <h4>Használt Bootstrap Verziók</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-light">
            <tr><th>Projekt</th><th>Bootstrap</th><th>Típus</th></tr>
          </thead>
          <tbody>
            <tr><td>minigépek</td><td>5.x</td><td>Minified</td></tr>
            <tr><td>turizmus / vendéglátás</td><td>5.3.3 (Bootswatch United)</td><td>Teljes</td></tr>
            <tr><td>tömegközlekedés</td><td>5.x</td><td>Teljes</td></tr>
            <tr><td>hungarikum</td><td>5.x</td><td>Teljes</td></tr>
            <tr><td>web_forras</td><td>5.x</td><td>Minified</td></tr>
            <tr><td>jegyzet / 1956</td><td>5.x</td><td>Minified</td></tr>
          </tbody>
        </table>
      </div>

      <h4>Projekt Szerkezeti Minta</h4>
      <p>Minden projekt azonos szerkezetet követ:</p>
      <pre className="bg-dark text-light p-3 rounded">
{`projekt/
├── index.html              # Főoldal
├── [aloldal].html          # Részletes oldal(ak)
├── css/
│   ├── bootstrap.min.css   # Bootstrap keretrendszer
│   └── sajat.css           # Egyedi stílusok
├── js/
│   └── bootstrap.bundle.min.js  # Bootstrap JS (navbar, collapse)
└── images/                 # Képek (.jpg, .jfif)`}
      </pre>

      <h4>Dokumentált Kategóriák</h4>
      <div className="row mt-3">
        {[
          { icon: '📐', title: 'Grid Rendszer', desc: '12-oszlopos reszponzív rács, töréspontok: sm, md, lg' },
          { icon: '🔤', title: 'Tipográfia', desc: 'Fejlécek, szövegszínek, oldalcím, egyedi betűstílusok' },
          { icon: '🧩', title: 'Komponensek', desc: 'Navbar, Cards, Tables, Alerts, Badges, Buttons, List Groups' },
          { icon: '🛠️', title: 'Segédosztályok', desc: 'Spacing, display, float, háttérszínek, képek' },
          { icon: '🎨', title: 'Egyedi CSS', desc: 'Akciós ár, háttérképek, gradiensek, árnyékok, ::first-letter' },
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
