import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function NavDocs() {
  return (
    <DocSection id="nav" title="🔗 Navigáció (Navbar)">
      <p>A Bootstrap reszponzív navigációs sávja. <code>navbar-expand-sm</code> = small törésponttól vízszintes.</p>

      <h4>Navbar — teljes példa a fájlból</h4>
      <CodeBlock
        label="index.html — navbar"
        code={`<nav class="navbar navbar-expand-sm bg-light">\n  <div class="container-fluid">\n    <ul class="navbar-nav">\n      <li class="nav-item">\n        <a class="nav-link" href="index.html#menupont1">\n          Rendezetlen lista\n        </a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="index.html#menupont2">\n          Rendezett lista\n        </a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="index.html#menupont3">\n          Táblázat\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>`}
      />
      <ExampleBox label="Előnézet">
        <nav className="navbar navbar-expand-sm bg-light rounded border mb-2">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#s">Rendezetlen lista</a></li>
              <li className="nav-item"><a className="nav-link" href="#s">Rendezett lista</a></li>
              <li className="nav-item"><a className="nav-link" href="#s">Táblázat</a></li>
            </ul>
          </div>
        </nav>
      </ExampleBox>

      <h4>Használt osztályok</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-light"><tr><th>Osztály</th><th>Szerep</th></tr></thead>
          <tbody>
            <tr><td><code>navbar</code></td><td>Navigációs sáv alap</td></tr>
            <tr><td><code>navbar-expand-sm</code></td><td>sm törésponttól vízszintes, alatta hamburger</td></tr>
            <tr><td><code>bg-light</code></td><td>Világos háttérszín</td></tr>
            <tr><td><code>container-fluid</code></td><td>Teljes szélességű konténer a nav-on belül</td></tr>
            <tr><td><code>navbar-nav</code></td><td>Navigációs lista</td></tr>
            <tr><td><code>nav-item</code></td><td>Listaelem a nav-ban</td></tr>
            <tr><td><code>nav-link</code></td><td>Hivatkozás a nav-ban</td></tr>
          </tbody>
        </table>
      </div>
    </DocSection>
  );
}
