import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function ComponentsDocs() {
  return (
    <DocSection id="components" title="🧩 Bootstrap Komponensek">
      <p>
        A projektekben használt összes Bootstrap 5 komponens, valós kódmintákkal
        és előnézetekkel.
      </p>

      {/* ---- NAVBAR ---- */}
      <h4 className="mt-4 pt-3 border-top">🔗 Navigációs Sáv (Navbar)</h4>
      <p>
        Reszponzív navbar, amely mobilon hamburger menüvé alakul.
        A <code>navbar-expand-lg</code> és <code>navbar-expand-sm</code> változatok is használatban vannak.
      </p>
      <CodeBlock
        label="Használat: index.html — minden projekt"
        code={`<nav class="navbar navbar-expand-lg bg-body-tertiary">\n  <div class="container-fluid">\n    <button class="navbar-toggler" type="button"\n            data-bs-toggle="collapse" data-bs-target="#navbarNav"\n            aria-controls="navbarNav" aria-expanded="false"\n            aria-label="Toggle navigation">\n      <span class="navbar-toggler-icon"></span>\n    </button>\n    <div class="collapse navbar-collapse" id="navbarNav">\n      <ul class="navbar-nav">\n        <li class="nav-item">\n          <a class="nav-link active" href="#">Kezdőlap</a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="#">Napi ajánlataink</a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="#">Összehasonlítás</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>`}
      />
      <ExampleBox label="Előnézet">
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded border">
          <div className="container-fluid">
            <span className="navbar-brand">🔍 Projekt</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#docNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="docNav">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link active" href="#s">Kezdőlap</a></li>
                <li className="nav-item"><a className="nav-link" href="#s">Ajánlatok</a></li>
                <li className="nav-item"><a className="nav-link" href="#s">Kapcsolat</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </ExampleBox>

      {/* ---- CARDS ---- */}
      <h4 className="mt-4 pt-3 border-top">🃏 Kártyák (Cards)</h4>
      <p>
        A kártya komponens az egyik leggyakrabban használt elem.
        Több változatban is megjelenik: fejléccel, képpel, gombbal, lábléccel.
      </p>

      <h5>Kapcsolat Kártya (Fejléccel)</h5>
      <CodeBlock
        label="Használat: index.html — Kapcsolat szekció"
        code={`<div class="card mb-3">\n  <div class="card-header bg-info text-white">Cím</div>\n  <div class="card-body">\n    <p>1146 Budapest, Thököly út 48-54.</p>\n  </div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header bg-info text-white">📬 Cím</div>
              <div className="card-body">
                <p className="mb-0">1146 Budapest, Thököly út 48-54.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header bg-info text-white">📞 Elérhetőség</div>
              <div className="card-body">
                <p className="mb-0">info@pelda.hu<br />+36 70 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </ExampleBox>

      <h5>Képes Kártya (Teljes)</h5>
      <CodeBlock
        label="Használat: turizmus projekt"
        code={`<div class="card h-100">\n  <img src="kep.jpg" class="card-img-top" alt="Leírás">\n  <div class="card-body">\n    <h5 class="card-title">Cím</h5>\n    <p class="card-text">Rövid leírás a kártya tartalmáról.</p>\n  </div>\n  <div class="card-footer">\n    <a href="#" class="btn btn-primary w-100">Részletek</a>\n  </div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="row">
          {['Hungarikum 1', 'Hungarikum 2', 'Hungarikum 3'].map((title, i) => (
            <div className="col-sm-4 mb-3" key={i}>
              <div className="card h-100">
                <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: 100 }}>
                  🖼️ Kép
                </div>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text small">Rövid leírás a kártya tartalmáról. Ez egy placeholder szöveg.</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary w-100">Részletek</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ExampleBox>

      {/* ---- TABLES ---- */}
      <h4 className="mt-4 pt-3 border-top">📊 Táblázatok (Tables)</h4>
      <p>
        A projektek három Bootstrap táblázat-változatot használnak:
      </p>
      <ul>
        <li><code>table</code> — alap stílus</li>
        <li><code>table-bordered</code> — keretes</li>
        <li><code>table-hover</code> — hover effekt</li>
        <li><code>table-responsive</code> — görgethető mobilon</li>
      </ul>
      <CodeBlock
        label="Használat: index.html — Összehasonlítás táblázat"
        code={`<table class="table">\n  <tr>\n    <th>Név</th>\n    <th>Processzor típusa</th>\n    <th>Memória</th>\n    <th>Részletek</th>\n  </tr>\n  <tr>\n    <td>Apple Mac Studio M2</td>\n    <td>Apple M2</td>\n    <td>32 GB</td>\n    <td><a href="apple.html" class="btn btn-outline-info">Leírás</a></td>\n  </tr>\n  <tr>\n    <td>ASUS VivoMini PB62</td>\n    <td>Intel Core i3</td>\n    <td>Memória nélkül</td>\n    <td><a href="" class="btn btn-outline-info disabled">Leírás</a></td>\n  </tr>\n</table>`}
      />
      <ExampleBox label="Előnézet">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr><th>Termék</th><th>CPU</th><th>RAM</th><th>Ár</th><th></th></tr>
            </thead>
            <tbody>
              <tr><td>Apple Mac Studio</td><td>Apple M2</td><td>32 GB</td><td>869 999 Ft</td><td><a href="#s" className="btn btn-outline-info btn-sm">Leírás</a></td></tr>
              <tr><td>ASUS VivoMini</td><td>Intel Core i3</td><td>Memória nélkül</td><td>64 999 Ft</td><td><button className="btn btn-outline-info btn-sm" disabled>Leírás</button></td></tr>
              <tr><td>UMAX UMM210J</td><td>Intel Celeron</td><td>8 GB</td><td>65 240 Ft</td><td><button className="btn btn-outline-info btn-sm" disabled>Leírás</button></td></tr>
              <tr><td>Intel BNUC11</td><td>Intel Pentium</td><td>Memória nélkül</td><td>92 170 Ft</td><td><button className="btn btn-outline-info btn-sm" disabled>Leírás</button></td></tr>
            </tbody>
          </table>
        </div>
      </ExampleBox>

      {/* ---- ALERTS ---- */}
      <h4 className="mt-4 pt-3 border-top">🚨 Figyelmeztetések (Alerts)</h4>
      <CodeBlock
        label="Használat: index.html — Kupon értesítő"
        code={`<div class="alert alert-info" role="alert">\n  <b>Gratulálunk!</b> 15% engedményt kap,\n  ha használja a PETRIK-15 kuponkódot vásárláskor!\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="alert alert-info"><b>ℹ️ Info:</b> Ez egy információs figyelmeztetés. Használható kuponok, értesítések megjelenítésére.</div>
        <div className="alert alert-danger"><b>⚠️ Veszély:</b> Ez egy veszély figyelmeztetés. Használható hibák, fontos figyelmeztetések megjelenítésére.</div>
      </ExampleBox>

      {/* ---- BADGES ---- */}
      <h4 className="mt-4 pt-3 border-top">🏷️ Jelvények (Badges)</h4>
      <p>Két mintában használt: láblécben és Hungarikum jelölőként.</p>
      <CodeBlock
        label="Használat 1: index.html — Lábléc"
        code={`<span class="badge bg-info float-start">Szerző Neve</span>\n<span class="badge bg-info float-start">10.E</span>\n<span class="badge bg-info float-end">2026.05.20.</span>`}
      />
      <ExampleBox label="Előnézet — Lábléc badge-ek">
        <p>
          <span className="badge bg-info me-2">Szerző Neve</span>
          <span className="badge bg-info me-2">10.E</span>
          <span className="badge bg-secondary float-end">2026.05.20.</span>
        </p>
      </ExampleBox>

      <CodeBlock
        label="Használat 2: turizmus projekt"
        code={`<span class="badge bg-success">Hungarikum</span>`}
      />
      <ExampleBox label="Előnézet — Hungarikum jelölő">
        <span className="badge bg-success me-1">✓ Hungarikum</span>
        <span className="badge bg-warning text-dark me-1">◇ Kiemelt</span>
        <span className="badge bg-danger me-1">⭕ Fontos</span>
        <span className="badge bg-info me-1">ℹ️ Info</span>
      </ExampleBox>

      {/* ---- BUTTONS ---- */}
      <h4 className="mt-4 pt-3 border-top">🔘 Gombok (Buttons)</h4>
      <CodeBlock
        label="Használat: táblázat sorok és kártyák"
        code={`<a href="" class="btn btn-outline-info disabled">Leírás</a>\n<a href="apple.html" class="btn btn-outline-info">Leírás</a>\n<a href="#" class="btn btn-primary w-100">Részletek</a>`}
      />
      <ExampleBox label="Előnézet">
        <button className="btn btn-primary me-2">Elsődleges</button>
        <button className="btn btn-success me-2">Sikeres</button>
        <button className="btn btn-danger me-2">Veszély</button>
        <button className="btn btn-info me-2">Info</button>
        <button className="btn btn-outline-info me-2">Körvonalas</button>
        <button className="btn btn-outline-info me-2" disabled>Tiltott</button>
      </ExampleBox>

      <h5>Egyedi Gomb — <code>.btn</code> (style.css)</h5>
      <CodeBlock
        label="Egyedi CSS: style.css (turizmus projekt)"
        code={`.btn {\n  background-color: #4c0e5e; /* Lila/bordó */\n  border: none;\n}\n.btn:hover {\n  background-color: #3a0a48; /* Sötétebb hover */\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <button className="btn text-white me-2" style={{ backgroundColor: '#4c0e5e', border: 'none' }}>Egyedi Gomb</button>
        <button className="btn text-white" style={{ backgroundColor: '#3a0a48', border: 'none' }}>Hover Állapot</button>
      </ExampleBox>

      {/* ---- LIST GROUPS ---- */}
      <h4 className="mt-4 pt-3 border-top">📋 Lista Csoportok (List Groups)</h4>
      <CodeBlock
        label="Használat 1: index.html — Forgalmazók"
        code={`<ul class="list-group">\n  <li class="list-group-item">Mysoft (<a href="">Mysoft</a>)</li>\n  <li class="list-group-item">Euronics (<a href="">Euronics</a>)</li>\n  <li class="list-group-item">Aqua (<a href="">Aqua</a>)</li>\n</ul>`}
      />
      <ExampleBox label="Előnézet">
        <ul className="list-group mb-3">
          <li className="list-group-item">Mysoft (<a href="#s">weboldal</a>)</li>
          <li className="list-group-item">Euronics (<a href="#s">weboldal</a>)</li>
          <li className="list-group-item">Aqua (<a href="#s">weboldal</a>)</li>
        </ul>
      </ExampleBox>

      <CodeBlock
        label="Használat 2: turizmus projekt — Betűrendes lista"
        code={`<ol class="list-group list-group-numbered">\n  <li class="list-group-item">Első elem</li>\n  <li class="list-group-item">Második elem</li>\n  <li class="list-group-item">Harmadik elem</li>\n</ol>`}
      />
      <ExampleBox label="Előnézet">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">Első tétel a listában</li>
          <li className="list-group-item">Második tétel a listában</li>
          <li className="list-group-item">Harmadik tétel a listában</li>
        </ol>
      </ExampleBox>

      {/* ---- HERO ---- */}
      <h4 className="mt-4 pt-3 border-top">🎯 Hero Fejléc</h4>
      <p>A projektek leggyakoribb oldalfejléce:</p>
      <CodeBlock
        label="Használat: index.html — minden projekt"
        code={`<div class="row">\n  <div class="col-sm-12 mb-3">\n    <div class="p-5 bg-info text-white rounded">\n      <h1 id="oldalcim">Árukergető</h1>\n      <h2 style="color: rgb(224, 230, 235);">\n        Mini számítógép konfigurációk\n      </h2>\n    </div>\n  </div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="p-5 bg-info text-white rounded">
          <h1 style={{ fontSize: '300%', textTransform: 'uppercase', fontStyle: 'italic' }}>Projekt Cím</h1>
          <h2 style={{ color: 'rgb(224, 230, 235)' }}>Alcím — Rövid leírás</h2>
        </div>
      </ExampleBox>
    </DocSection>
  );
}
