import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function BootstrapDocs() {
  return (
    <DocSection id="bootstrap" title="🥾 Bootstrap 5 Teljes Referencia">
      <div className="alert alert-info">
        <strong>Bootstrap 5.3</strong> — Teljes körű referencia.
        Minden példa működő, másolható kóddal és élő előnézettel.
      </div>

      {/* ============ LAYOUT ============ */}
      <h3 className="mt-4 pt-3 border-top">📐 Elrendezés (Layout)</h3>

      <h4>Konténerek</h4>
      <div className="table-responsive mb-3">
        <table className="table table-bordered table-sm">
          <thead className="table-light">
            <tr><th>Osztály</th><th>Max. szélesség</th><th>Viselkedés</th></tr>
          </thead>
          <tbody>
            <tr><td><code>.container</code></td><td>1320px</td><td>Reszponzív, középre igazított, padding-gel</td></tr>
            <tr><td><code>.container-fluid</code></td><td>100%</td><td>Teljes szélesség, minden töréspontnál</td></tr>
            <tr><td><code>.container-sm</code></td><td>540px</td><td>100% sm alatt, utána fix</td></tr>
            <tr><td><code>.container-md</code></td><td>720px</td><td>100% md alatt, utána fix</td></tr>
            <tr><td><code>.container-lg</code></td><td>960px</td><td>100% lg alatt, utána fix</td></tr>
          </tbody>
        </table>
      </div>
      <CodeBlock
        label="Használat"
        code={`<div class="container bg-light">\n  <!-- Tartalom itt -->\n</div>`}
      />

      <h4>Grid Rendszer — Töréspontok</h4>
      <div className="table-responsive mb-3">
        <table className="table table-bordered table-sm">
          <thead className="table-light">
            <tr><th>Töréspont</th><th>Osztály prefix</th><th>Min. szélesség</th><th>Oszlop max.</th></tr>
          </thead>
          <tbody>
            <tr><td>Extra small</td><td><code>.col-</code></td><td>&lt; 576px</td><td>12</td></tr>
            <tr><td>Small</td><td><code>.col-sm-</code></td><td>≥ 576px</td><td>12</td></tr>
            <tr><td>Medium</td><td><code>.col-md-</code></td><td>≥ 768px</td><td>12</td></tr>
            <tr><td>Large</td><td><code>.col-lg-</code></td><td>≥ 992px</td><td>12</td></tr>
            <tr><td>Extra large</td><td><code>.col-xl-</code></td><td>≥ 1200px</td><td>12</td></tr>
            <tr><td>Extra extra large</td><td><code>.col-xxl-</code></td><td>≥ 1400px</td><td>12</td></tr>
          </tbody>
        </table>
      </div>
      <CodeBlock
        label="Grid alapok"
        code={`<div class="container">\n  <div class="row">\n    <div class="col-sm-6 col-md-3">1</div>\n    <div class="col-sm-6 col-md-3">2</div>\n    <div class="col-sm-6 col-md-3">3</div>\n    <div class="col-sm-6 col-md-3">4</div>\n  </div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="row text-center text-white small mb-2">
          <div className="col-sm-6 col-md-3"><div className="bg-primary rounded p-2">col-sm-6 col-md-3</div></div>
          <div className="col-sm-6 col-md-3"><div className="bg-success rounded p-2">col-sm-6 col-md-3</div></div>
          <div className="col-sm-6 col-md-3"><div className="bg-warning rounded p-2">col-sm-6 col-md-3</div></div>
          <div className="col-sm-6 col-md-3"><div className="bg-danger rounded p-2">col-sm-6 col-md-3</div></div>
        </div>
      </ExampleBox>

      {/* ============ TYPOGRAPHY ============ */}
      <h3 className="mt-4 pt-3 border-top">🔤 Tipográfia</h3>

      <h4>Fejlécek (h1–h6)</h4>
      <CodeBlock
        code={`<h1>Fejléc 1 — 2.5rem (40px)</h1>\n<h2>Fejléc 2 — 2rem (32px)</h2>\n<h3>Fejléc 3 — 1.75rem (28px)</h3>\n<h4>Fejléc 4 — 1.5rem (24px)</h4>\n<h5>Fejléc 5 — 1.25rem (20px)</h5>\n<h6>Fejléc 6 — 1rem (16px)</h6>`}
      />
      <ExampleBox label="Előnézet">
        <h1>h1. Bootstrap fejléc</h1>
        <h2>h2. Bootstrap fejléc</h2>
        <h3>h3. Bootstrap fejléc</h3>
        <h4>h4. Bootstrap fejléc</h4>
        <h5>h5. Bootstrap fejléc</h5>
        <h6>h6. Bootstrap fejléc</h6>
      </ExampleBox>

      <h4>Display Fejlécek</h4>
      <CodeBlock
        code={`<h1 class="display-1">Display 1</h1>\n<h1 class="display-2">Display 2</h1>\n<h1 class="display-3">Display 3</h1>\n<h1 class="display-4">Display 4</h1>\n<h1 class="display-5">Display 5</h1>\n<h1 class="display-6">Display 6</h1>`}
      />
      <ExampleBox label="Előnézet">
        <h1 className="display-1">Display 1</h1>
        <h1 className="display-2">Display 2</h1>
        <h1 className="display-3">Display 3</h1>
        <h1 className="display-4">Display 4</h1>
        <h1 className="display-5">Display 5</h1>
        <h1 className="display-6">Display 6</h1>
      </ExampleBox>

      <h4>Szövegstílusok</h4>
      <CodeBlock
        code={`<p class="lead">Kiemelt bekezdés</p>\n<p class="text-start">Balra igazított</p>\n<p class="text-center">Középre igazított</p>\n<p class="text-end">Jobbra igazított</p>\n<p class="text-muted">Halvány szöveg</p>\n<small>Kicsi szöveg</small>\n<mark>Kiemelt szöveg</mark>\n<del>Törölt szöveg</del>\n<ins>Beszúrt szöveg</ins>\n<strong>Félkövér</strong>\n<em>Dőlt</em>`}
      />
      <ExampleBox label="Előnézet">
        <p className="lead">Kiemelt bekezdés (lead)</p>
        <p className="text-start">Balra igazított</p>
        <p className="text-center">Középre igazított</p>
        <p className="text-end">Jobbra igazított</p>
        <p className="text-muted">Halvány szöveg (text-muted)</p>
        <p><mark>Kiemelt</mark> | <del>Törölt</del> | <ins>Beszúrt</ins> | <strong>Félkövér</strong> | <em>Dőlt</em></p>
      </ExampleBox>

      <h4>Szövegszínek</h4>
      <CodeBlock
        code={`<p class="text-primary">Elsődleges (kék)</p>\n<p class="text-secondary">Másodlagos (szürke)</p>\n<p class="text-success">Sikeres (zöld)</p>\n<p class="text-danger">Veszély (piros)</p>\n<p class="text-warning">Figyelmeztetés (sárga)</p>\n<p class="text-info">Információs (cián)</p>\n<p class="text-dark">Sötét</p>\n<p class="text-light bg-dark">Világos (sötét háttéren)</p>`}
      />
      <ExampleBox label="Előnézet">
        {['primary','secondary','success','danger','warning','info','dark'].map(c => (
          <p key={c} className={`text-${c} mb-1`}><strong>.text-{c}</strong> — példa szöveg</p>
        ))}
        <p className="text-light bg-dark p-1"><strong>.text-light</strong> — példa szöveg</p>
      </ExampleBox>

      {/* ============ TABLES ============ */}
      <h3 className="mt-4 pt-3 border-top">📊 Táblázatok</h3>
      <CodeBlock
        code={`<table class="table">\n  <thead><tr><th>#</th><th>Név</th><th>Érték</th></tr></thead>\n  <tbody>\n    <tr><td>1</td><td>Mark</td><td>Otto</td></tr>\n    <tr><td>2</td><td>Jacob</td><td>Thornton</td></tr>\n  </tbody>\n</table>`}
      />
      <ExampleBox label="Előnézet">
        <table className="table">
          <thead><tr><th>#</th><th>Név</th><th>Érték</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Első sor</td><td>Adat 1</td></tr>
            <tr><td>2</td><td>Második sor</td><td>Adat 2</td></tr>
            <tr><td>3</td><td>Harmadik sor</td><td>Adat 3</td></tr>
          </tbody>
        </table>
      </ExampleBox>

      <h4>Táblázat Variánsok</h4>
      <CodeBlock
        code={`<!-- Alap -->\n<table class="table">...</table>\n\n<!-- Csíkos -->\n<table class="table table-striped">...</table>\n\n<!-- Keretes -->\n<table class="table table-bordered">...</table>\n\n<!-- Hover -->\n<table class="table table-hover">...</table>\n\n<!-- Sötét -->\n<table class="table table-dark">...</table>`}
      />
      <ExampleBox label="Előnézet">
        <table className="table table-striped table-hover table-bordered table-sm">
          <thead className="table-dark"><tr><th>#</th><th>Név</th><th>Státusz</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Első</td><td><span className="badge bg-success">Aktív</span></td></tr>
            <tr><td>2</td><td>Második</td><td><span className="badge bg-warning text-dark">Függő</span></td></tr>
            <tr><td>3</td><td>Harmadik</td><td><span className="badge bg-danger">Inaktív</span></td></tr>
          </tbody>
        </table>
      </ExampleBox>

      {/* ============ IMAGES ============ */}
      <h3 className="mt-4 pt-3 border-top">🖼️ Képek</h3>
      <CodeBlock
        code={`<img src="kep.jpg" class="img-fluid" alt="Reszponzív">\n<img src="kep.jpg" class="img-thumbnail" alt="Keretes">\n<img src="kep.jpg" class="rounded" alt="Lekerekített">\n<img src="kep.jpg" class="rounded-circle" alt="Kör">\n<img src="kep.jpg" class="float-start" alt="Balra">\n<img src="kep.jpg" class="float-end" alt="Jobbra">`}
      />
      <ExampleBox label="Előnézet">
        <div className="d-flex flex-wrap gap-2 align-items-end">
          <div className="text-center"><div className="bg-info rounded" style={{width:80,height:60}}></div><small>img-fluid</small></div>
          <div className="text-center"><div className="bg-success rounded border border-3" style={{width:80,height:60}}></div><small>img-thumbnail</small></div>
          <div className="text-center"><div className="bg-warning rounded-circle" style={{width:60,height:60}}></div><small>rounded-circle</small></div>
        </div>
      </ExampleBox>

      {/* ============ FORMS ============ */}
      <h3 className="mt-4 pt-3 border-top">📝 Űrlapok</h3>
      <CodeBlock
        code={`<form>\n  <div class="mb-3">\n    <label for="email" class="form-label">Email cím</label>\n    <input type="email" class="form-control" id="email" placeholder="nev@pelda.hu">\n  </div>\n  <div class="mb-3">\n    <label for="password" class="form-label">Jelszó</label>\n    <input type="password" class="form-control" id="password">\n  </div>\n  <div class="mb-3 form-check">\n    <input type="checkbox" class="form-check-input" id="check">\n    <label class="form-check-label" for="check">Emlékezz rám</label>\n  </div>\n  <button type="submit" class="btn btn-primary">Küldés</button>\n</form>`}
      />
      <ExampleBox label="Előnézet">
        <form onSubmit={e => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label">Email cím</label>
            <input type="email" className="form-control" placeholder="nev@pelda.hu" />
          </div>
          <div className="mb-3">
            <label className="form-label">Jelszó</label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="docCheck" />
            <label className="form-check-label" htmlFor="docCheck">Emlékezz rám</label>
          </div>
          <button type="submit" className="btn btn-primary">Küldés</button>
        </form>
      </ExampleBox>

      <h4>Form Control Méretek</h4>
      <CodeBlock
        code={`<input class="form-control form-control-lg" type="text">\n<input class="form-control" type="text">\n<input class="form-control form-control-sm" type="text">`}
      />
      <ExampleBox label="Előnézet">
        <input className="form-control form-control-lg mb-2" type="text" placeholder="form-control-lg" readOnly />
        <input className="form-control mb-2" type="text" placeholder="form-control (alap)" readOnly />
        <input className="form-control form-control-sm mb-2" type="text" placeholder="form-control-sm" readOnly />
      </ExampleBox>

      {/* ============ ALL COMPONENTS A-Z ============ */}
      <h3 className="mt-4 pt-3 border-top">🧩 Összes Komponens (A-Z)</h3>

      {/* Accordion */}
      <h4>Accordion (Lenyíló panel)</h4>
      <CodeBlock
        code={`<div class="accordion" id="accordionExample">\n  <div class="accordion-item">\n    <h2 class="accordion-header">\n      <button class="accordion-button" type="button"\n              data-bs-toggle="collapse" data-bs-target="#collapseOne">\n        Accordion Item #1\n      </button>\n    </h2>\n    <div id="collapseOne" class="accordion-collapse collapse show"\n         data-bs-parent="#accordionExample">\n      <div class="accordion-body">\n        Tartalom ide jön.\n      </div>\n    </div>\n  </div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="accordion" id="docAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#docAcc1">Accordion #1</button>
            </h2>
            <div id="docAcc1" className="accordion-collapse collapse show" data-bs-parent="#docAccordion">
              <div className="accordion-body">Ez az accordion body tartalma. Ide jöhet bármilyen HTML.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#docAcc2">Accordion #2</button>
            </h2>
            <div id="docAcc2" className="accordion-collapse collapse" data-bs-parent="#docAccordion">
              <div className="accordion-body">Második elem tartalma.</div>
            </div>
          </div>
        </div>
      </ExampleBox>

      {/* Breadcrumb */}
      <h4 className="mt-4 pt-3 border-top">Breadcrumb (Morzsa navigáció)</h4>
      <CodeBlock
        code={`<nav aria-label="breadcrumb">\n  <ol class="breadcrumb">\n    <li class="breadcrumb-item"><a href="#">Főoldal</a></li>\n    <li class="breadcrumb-item"><a href="#">Könyvtár</a></li>\n    <li class="breadcrumb-item active">Adatok</li>\n  </ol>\n</nav>`}
      />
      <ExampleBox label="Előnézet">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#s">Főoldal</a></li>
            <li className="breadcrumb-item"><a href="#s">Könyvtár</a></li>
            <li className="breadcrumb-item active">Adatok</li>
          </ol>
        </nav>
      </ExampleBox>

      {/* Button Group */}
      <h4 className="mt-4 pt-3 border-top">Button Group (Gombcsoport)</h4>
      <CodeBlock
        code={`<div class="btn-group">\n  <button class="btn btn-primary">Bal</button>\n  <button class="btn btn-primary">Közép</button>\n  <button class="btn btn-primary">Jobb</button>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="btn-group me-2">
          <button className="btn btn-primary">Bal</button>
          <button className="btn btn-primary">Közép</button>
          <button className="btn btn-primary">Jobb</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-outline-info">1</button>
          <button className="btn btn-outline-info">2</button>
          <button className="btn btn-outline-info">3</button>
        </div>
      </ExampleBox>

      {/* Carousel */}
      <h4 className="mt-4 pt-3 border-top">Carousel (Diavetítés)</h4>
      <CodeBlock
        code={`<div id="demo" class="carousel slide" data-bs-ride="carousel">\n  <div class="carousel-indicators">\n    <button data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>\n    <button data-bs-target="#demo" data-bs-slide-to="1"></button>\n  </div>\n  <div class="carousel-inner">\n    <div class="carousel-item active">\n      <img src="..." class="d-block w-100" alt="...">\n      <div class="carousel-caption">\n        <h5>Első dia</h5>\n        <p>Leírás</p>\n      </div>\n    </div>\n  </div>\n  <button class="carousel-control-prev" data-bs-target="#demo" data-bs-slide="prev">\n    <span class="carousel-control-prev-icon"></span>\n  </button>\n  <button class="carousel-control-next" data-bs-target="#demo" data-bs-slide="next">\n    <span class="carousel-control-next-icon"></span>\n  </button>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div id="docCarousel" className="carousel slide" data-bs-ride="carousel" style={{maxWidth:500}}>
          <div className="carousel-inner rounded">
            <div className="carousel-item active bg-info text-white text-center p-5">
              <h3>1. dia</h3><p>Carousel példa</p>
            </div>
            <div className="carousel-item bg-success text-white text-center p-5">
              <h3>2. dia</h3><p>Második oldal</p>
            </div>
            <div className="carousel-item bg-warning text-center p-5">
              <h3>3. dia</h3><p>Harmadik oldal</p>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#docCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#docCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </ExampleBox>

      {/* Close Button */}
      <h4 className="mt-4 pt-3 border-top">Close Button (Bezáró gomb)</h4>
      <CodeBlock
        code={`<button type="button" class="btn-close" aria-label="Close"></button>`}
      />
      <ExampleBox label="Előnézet">
        <div className="alert alert-warning alert-dismissible fade show d-flex align-items-center">
          Bezárható alert! 
          <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert"></button>
        </div>
      </ExampleBox>

      {/* Collapse */}
      <h4 className="mt-4 pt-3 border-top">Collapse (Összecsukás)</h4>
      <CodeBlock
        code={`<button class="btn btn-primary" data-bs-toggle="collapse"\n        data-bs-target="#collapseExample">\n  Gomb\n</button>\n<div class="collapse" id="collapseExample">\n  <div class="card card-body">\n    Rejtett tartalom.\n  </div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <button className="btn btn-primary mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#docCollapse">
          🔽 Kattints a lenyitáshoz
        </button>
        <div className="collapse" id="docCollapse">
          <div className="card card-body bg-light">Ez a rejtett tartalom, amely a gombra kattintva jelenik meg.</div>
        </div>
      </ExampleBox>

      {/* Dropdown */}
      <h4 className="mt-4 pt-3 border-top">Dropdown (Lenyló menü)</h4>
      <CodeBlock
        code={`<div class="dropdown">\n  <button class="btn btn-secondary dropdown-toggle"\n          data-bs-toggle="dropdown">\n    Menü\n  </button>\n  <ul class="dropdown-menu">\n    <li><a class="dropdown-item" href="#">Művelet 1</a></li>\n    <li><a class="dropdown-item" href="#">Művelet 2</a></li>\n    <li><hr class="dropdown-divider"></li>\n    <li><a class="dropdown-item" href="#">Művelet 3</a></li>\n  </ul>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Menü</button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#s">Művelet 1</a></li>
            <li><a className="dropdown-item" href="#s">Művelet 2</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#s">Művelet 3</a></li>
          </ul>
        </div>
      </ExampleBox>

      {/* Modal trigger */}
      <h4 className="mt-4 pt-3 border-top">Modal (Felugró ablak)</h4>
      <CodeBlock
        code={`<button class="btn btn-primary" data-bs-toggle="modal"\n        data-bs-target="#myModal">\n  Modal megnyitása\n</button>\n\n<div class="modal fade" id="myModal" tabindex="-1">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title">Cím</h5>\n        <button class="btn-close" data-bs-dismiss="modal"></button>\n      </div>\n      <div class="modal-body">Tartalom...</div>\n      <div class="modal-footer">\n        <button class="btn btn-secondary" data-bs-dismiss="modal">Bezár</button>\n        <button class="btn btn-primary">Mentés</button>\n      </div>\n    </div>\n  </div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#docModal">Modal megnyitása</button>
        <div className="modal fade" id="docModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header"><h5 className="modal-title">Példa Modal</h5><button className="btn-close" data-bs-dismiss="modal"></button></div>
              <div className="modal-body">Ez a modal ablak tartalma. Ide jöhet bármilyen szöveg vagy űrlap.</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">Bezár</button>
                <button className="btn btn-primary">Mentés</button>
              </div>
            </div>
          </div>
        </div>
      </ExampleBox>

      {/* Navs & Tabs */}
      <h4 className="mt-4 pt-3 border-top">Navs & Tabs (Fülek)</h4>
      <CodeBlock
        code={`<ul class="nav nav-tabs">\n  <li class="nav-item">\n    <a class="nav-link active" href="#">Aktív</a>\n  </li>\n  <li class="nav-item">\n    <a class="nav-link" href="#">Link</a>\n  </li>\n  <li class="nav-item">\n    <a class="nav-link disabled">Tiltott</a>\n  </li>\n</ul>`}
      />
      <ExampleBox label="Előnézet">
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item"><a className="nav-link active" href="#s">Aktív fül</a></li>
          <li className="nav-item"><a className="nav-link" href="#s">Másik fül</a></li>
          <li className="nav-item"><a className="nav-link disabled">Tiltott</a></li>
        </ul>
        <ul className="nav nav-pills">
          <li className="nav-item"><a className="nav-link active" href="#s">Aktív pill</a></li>
          <li className="nav-item"><a className="nav-link" href="#s">Másik pill</a></li>
        </ul>
      </ExampleBox>

      {/* Offcanvas */}
      <h4 className="mt-4 pt-3 border-top">Offcanvas (Oldalsó panel)</h4>
      <CodeBlock
        code={`<button class="btn btn-primary" data-bs-toggle="offcanvas"\n        data-bs-target="#offcanvas">\n  Oldalsó panel\n</button>\n<div class="offcanvas offcanvas-start" id="offcanvas">\n  <div class="offcanvas-header">\n    <h5>Cím</h5>\n    <button class="btn-close" data-bs-dismiss="offcanvas"></button>\n  </div>\n  <div class="offcanvas-body">Tartalom...</div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#docOffcanvas">Oldalsó panel</button>
      </ExampleBox>

      {/* Pagination */}
      <h4 className="mt-4 pt-3 border-top">Pagination (Lapozó)</h4>
      <CodeBlock
        code={`<nav><ul class="pagination">\n  <li class="page-item disabled"><a class="page-link">Előző</a></li>\n  <li class="page-item active"><a class="page-link" href="#">1</a></li>\n  <li class="page-item"><a class="page-link" href="#">2</a></li>\n  <li class="page-item"><a class="page-link" href="#">3</a></li>\n  <li class="page-item"><a class="page-link" href="#">Következő</a></li>\n</ul></nav>`}
      />
      <ExampleBox label="Előnézet">
        <nav><ul className="pagination">
          <li className="page-item disabled"><a className="page-link" href="#s">Előző</a></li>
          <li className="page-item active"><a className="page-link" href="#s">1</a></li>
          <li className="page-item"><a className="page-link" href="#s">2</a></li>
          <li className="page-item"><a className="page-link" href="#s">3</a></li>
          <li className="page-item"><a className="page-link" href="#s">Következő</a></li>
        </ul></nav>
      </ExampleBox>

      {/* Progress */}
      <h4 className="mt-4 pt-3 border-top">Progress (Folyamatjelző)</h4>
      <CodeBlock
        code={`<div class="progress">\n  <div class="progress-bar" style="width: 25%">25%</div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="progress mb-2"><div className="progress-bar" style={{width:'25%'}}>25%</div></div>
        <div className="progress mb-2"><div className="progress-bar bg-success" style={{width:'50%'}}>50%</div></div>
        <div className="progress mb-2"><div className="progress-bar bg-info" style={{width:'75%'}}>75%</div></div>
        <div className="progress"><div className="progress-bar bg-danger" style={{width:'100%'}}>100%</div></div>
      </ExampleBox>

      {/* Scrollspy */}
      <h4 className="mt-4 pt-3 border-top">Scrollspy (Görgetés követő)</h4>
      <CodeBlock
        code={`<nav id="navbar-scrollspy" class="navbar bg-body-tertiary px-3">\n  <ul class="nav nav-pills">\n    <li class="nav-item">\n      <a class="nav-link" href="#section1">1. szekció</a>\n    </li>\n  </ul>\n</nav>\n<div data-bs-spy="scroll" data-bs-target="#navbar-scrollspy"\n     data-bs-smooth-scroll="true">\n  <div id="section1">...</div>\n</div>`}
      />

      {/* Spinners */}
      <h4 className="mt-4 pt-3 border-top">Spinners (Betöltő animáció)</h4>
      <CodeBlock
        code={`<div class="spinner-border text-primary"></div>\n<div class="spinner-grow text-success"></div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="d-flex gap-3 align-items-center">
          <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Betöltés...</span></div>
          <div className="spinner-border text-success" role="status"></div>
          <div className="spinner-border text-danger" role="status"></div>
          <div className="spinner-grow text-warning" role="status"></div>
          <div className="spinner-grow text-info" role="status"></div>
        </div>
      </ExampleBox>

      {/* Toasts */}
      <h4 className="mt-4 pt-3 border-top">Toasts (Értesítések)</h4>
      <CodeBlock
        code={`<div class="toast" role="alert">\n  <div class="toast-header">\n    <strong class="me-auto">Bootstrap</strong>\n    <small>épp most</small>\n    <button class="btn-close" data-bs-dismiss="toast"></button>\n  </div>\n  <div class="toast-body">Hello, világ!</div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="toast show" role="alert">
          <div className="toast-header">
            <strong className="me-auto">🔔 Bootstrap</strong>
            <small>épp most</small>
            <button className="btn-close" data-bs-dismiss="toast"></button>
          </div>
          <div className="toast-body">Ez egy toast értesítés — automatikusan eltűnik.</div>
        </div>
      </ExampleBox>

      {/* Tooltips & Popovers note */}
      <h4 className="mt-4 pt-3 border-top">Tooltips & Popovers</h4>
      <CodeBlock
        code={`<button data-bs-toggle="tooltip"\n        title="Ez egy tooltip!">\n  Tooltip\n</button>\n\n<button data-bs-toggle="popover"\n        title="Popover cím"\n        data-bs-content="Popover tartalom">\n  Popover\n</button>`}
      />
      <ExampleBox label="Előnézet">
        <button className="btn btn-secondary me-2" data-bs-toggle="tooltip" title="Ez egy tooltip szöveg!">Tooltip gomb</button>
        <button className="btn btn-secondary" data-bs-toggle="popover" title="Popover cím" data-bs-content="Ez a popover tartalma. Hosszabb leírás is lehet.">Popover gomb</button>
      </ExampleBox>

      {/* ============ UTILITIES SUMMARY ============ */}
      <h3 className="mt-4 pt-3 border-top">🎯 Segédosztályok Gyorsreferencia</h3>

      <h4>Keretek (Borders)</h4>
      <CodeBlock code={`<span class="border">Keret</span>\n<span class="border border-primary">Színes</span>\n<span class="border-0">Nincs keret</span>\n<span class="border-top">Felső</span>\n<span class="rounded">Lekerekített</span>\n<span class="rounded-circle">Kör</span>`} />
      <ExampleBox label="Előnézet">
        <div className="d-flex flex-wrap gap-2">
          <span className="border p-1">border</span>
          <span className="border border-primary p-1">border-primary</span>
          <span className="border border-success p-1 rounded">rounded</span>
          <span className="border border-danger p-1 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width:40,height:40}}>Kör</span>
        </div>
      </ExampleBox>

      <h4>Flexbox</h4>
      <CodeBlock code={`<div class="d-flex">Flex</div>\n<div class="d-inline-flex">Inline flex</div>\n<div class="flex-column">Oszlop</div>\n<div class="justify-content-center">Középre</div>\n<div class="align-items-center">Középre fel.</div>`} />
      <ExampleBox label="Előnézet">
        <div className="d-flex justify-content-between align-items-center bg-light border rounded p-3">
          <span className="badge bg-primary">Bal</span>
          <span className="badge bg-success">Közép</span>
          <span className="badge bg-danger">Jobb</span>
        </div>
      </ExampleBox>

      <h4>Láthatóság (Display)</h4>
      <div className="table-responsive mb-3">
        <table className="table table-bordered table-sm">
          <thead className="table-light">
            <tr><th>Osztály</th><th>Hatás</th></tr>
          </thead>
          <tbody>
            <tr><td><code>.d-none</code></td><td>Elrejt</td></tr>
            <tr><td><code>.d-block</code></td><td>Block elem</td></tr>
            <tr><td><code>.d-inline</code></td><td>Inline elem</td></tr>
            <tr><td><code>.d-flex</code></td><td>Flex konténer</td></tr>
            <tr><td><code>.d-grid</code></td><td>Grid konténer</td></tr>
            <tr><td><code>.d-sm-none</code></td><td>Elrejt sm törésponttól</td></tr>
          </tbody>
        </table>
      </div>

      <h4>Árnyékok (Shadows)</h4>
      <CodeBlock code={`<div class="shadow-sm">Kis árnyék</div>\n<div class="shadow">Normál árnyék</div>\n<div class="shadow-lg">Nagy árnyék</div>`} />
      <ExampleBox label="Előnézet">
        <div className="d-flex gap-3">
          <div className="shadow-sm p-3 bg-white rounded">shadow-sm</div>
          <div className="shadow p-3 bg-white rounded">shadow</div>
          <div className="shadow-lg p-3 bg-white rounded">shadow-lg</div>
        </div>
      </ExampleBox>

      <h4>Szélesség & Magasság</h4>
      <CodeBlock code={`<div class="w-25">25%</div>\n<div class="w-50">50%</div>\n<div class="w-75">75%</div>\n<div class="w-100">100%</div>\n<div class="h-100">100% magasság</div>`} />
      <ExampleBox label="Előnézet">
        <div className="w-100 bg-light rounded mb-1"><div className="bg-primary rounded p-1 text-white text-center" style={{width:'25%'}}>w-25</div></div>
        <div className="w-100 bg-light rounded mb-1"><div className="bg-success rounded p-1 text-white text-center" style={{width:'50%'}}>w-50</div></div>
        <div className="w-100 bg-light rounded mb-1"><div className="bg-warning rounded p-1 text-center" style={{width:'75%'}}>w-75</div></div>
        <div className="w-100 bg-info rounded p-1 text-white text-center">w-100</div>
      </ExampleBox>

      <h4>Szövegkezelés</h4>
      <CodeBlock code={`<p class="text-wrap">Sortörés</p>\n<p class="text-nowrap">Nincs sortörés</p>\n<p class="text-truncate">Levágás...</p>\n<p class="text-break">HosszúSzóTörése</p>\n<p class="text-uppercase">nagybetűs</p>\n<p class="text-capitalize">minden szó nagy</p>\n<p class="fw-bold">Félkövér</p>\n<p class="fw-normal">Normál</p>\n<p class="fw-light">Vékony</p>\n<p class="fst-italic">Dőlt</p>`} />
      <ExampleBox label="Előnézet">
        <p className="text-uppercase fw-bold">text-uppercase + fw-bold</p>
        <p className="text-capitalize">text-capitalize — minden szó nagybetűvel</p>
        <p className="fw-light fst-italic">fw-light + fst-italic — vékony dőlt</p>
        <p className="text-truncate border p-1" style={{maxWidth:250}}>text-truncate — hosszú szöveg levágása három ponttal a végén</p>
      </ExampleBox>
    </DocSection>
  );
}
