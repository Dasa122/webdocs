import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function UtilitiesDocs() {
  return (
    <DocSection id="utilities" title="🛠️ Bootstrap Segédosztályok">
      <p>
        A projektekben gyakran használt Bootstrap utility osztályok gyűjteménye.
      </p>

      <h4>📏 Térközök (Spacing)</h4>
      <div className="table-responsive mb-4">
        <table className="table table-bordered table-sm">
          <thead className="table-light">
            <tr><th>Osztály</th><th>Jelentés</th><th>Használat</th></tr>
          </thead>
          <tbody>
            <tr><td><code>p-5</code></td><td>Nagy padding (3rem)</td><td>Hero fejléc</td></tr>
            <tr><td><code>p-4</code></td><td>Közepes padding (1.5rem)</td><td>Kártyák</td></tr>
            <tr><td><code>mb-3</code></td><td>Margin-bottom (1rem)</td><td>✅ Szinte minden elemnél</td></tr>
            <tr><td><code>mt-4</code></td><td>Margin-top (1.5rem)</td><td>Szekciók között</td></tr>
            <tr><td><code>my-3</code></td><td>Margin Y tengely</td><td>Függőleges térköz</td></tr>
            <tr><td><code>px-3</code></td><td>Padding X tengely</td><td>Vízszintes padding</td></tr>
          </tbody>
        </table>
      </div>
      <ExampleBox label="Előnézet">
        <div className="p-5 bg-info text-white rounded mb-3"><code>p-5</code> — Nagy padding</div>
        <div className="p-4 bg-light border rounded mb-3"><code>p-4</code> — Közepes padding</div>
        <div className="p-3 bg-light border rounded"><code>p-3</code> — Alap padding</div>
      </ExampleBox>

      <h4 className="mt-4 pt-3 border-top">📐 Elrendezés (Display & Position)</h4>
      <div className="table-responsive mb-4">
        <table className="table table-bordered table-sm">
          <thead className="table-light">
            <tr><th>Osztály</th><th>Jelentés</th><th>Használat</th></tr>
          </thead>
          <tbody>
            <tr><td><code>d-flex</code></td><td>Flexbox konténer</td><td>✅ Gyakori</td></tr>
            <tr><td><code>flex-column</code></td><td>Függőleges flex irány</td><td>Kártya tartalom</td></tr>
            <tr><td><code>justify-content-center</code></td><td>Vízszintes középre igazítás</td><td>Navbar</td></tr>
            <tr><td><code>float-start</code></td><td>Balra úsztatás</td><td>✅ Lábléc badge-ek</td></tr>
            <tr><td><code>float-end</code></td><td>Jobbra úsztatás</td><td>✅ Lábléc dátum</td></tr>
            <tr><td><code>w-100</code></td><td>100% szélesség</td><td>Képek, gombok</td></tr>
            <tr><td><code>h-100</code></td><td>100% magasság</td><td>Kártyák egyforma magassága</td></tr>
          </tbody>
        </table>
      </div>
      <ExampleBox label="Előnézet — float és d-flex">
        <div className="border p-3 rounded mb-2">
          <span className="float-start badge bg-info">float-start</span>
          <span className="float-end badge bg-info">float-end</span>
          <div className="clearfix"></div>
        </div>
        <div className="d-flex justify-content-center border p-3 rounded bg-light">
          <span className="badge bg-success me-2">d-flex</span>
          <span className="badge bg-success me-2">justify-content-center</span>
        </div>
      </ExampleBox>

      <h4 className="mt-4 pt-3 border-top">🎨 Háttérszínek (Background)</h4>
      <div className="table-responsive mb-4">
        <table className="table table-bordered table-sm">
          <thead className="table-light">
            <tr><th>Osztály</th><th>Szín</th><th>Használat</th></tr>
          </thead>
          <tbody>
            <tr><td><code>bg-light</code></td><td>#f8f9fa</td><td>✅ Konténer háttér (MINDEN projekt)</td></tr>
            <tr><td><code>bg-info</code></td><td>#0dcaf0</td><td>✅ Hero fejléc, kártya fejléc</td></tr>
            <tr><td><code>bg-white</code></td><td>white</td><td>Kártya törzs</td></tr>
            <tr><td><code>bg-success</code></td><td>#198754</td><td>Hungarikum badge</td></tr>
            <tr><td><code>bg-danger</code></td><td>#dc3545</td><td>Figyelmeztetés</td></tr>
            <tr><td><code>bg-warning</code></td><td>#ffc107</td><td>Kiemelés</td></tr>
            <tr><td><code>bg-body-tertiary</code></td><td>#f8f9fa</td><td>Navbar háttér</td></tr>
          </tbody>
        </table>
      </div>
      <ExampleBox label="Előnézet">
        <div className="d-flex flex-wrap gap-2">
          {[
            { cls: 'bg-light', label: 'light', border: true },
            { cls: 'bg-info text-white', label: 'info' },
            { cls: 'bg-success text-white', label: 'success' },
            { cls: 'bg-danger text-white', label: 'danger' },
            { cls: 'bg-warning', label: 'warning' },
          ].map((b) => (
            <div key={b.label} className={`${b.cls} ${b.border ? 'border' : ''} rounded px-3 py-2 fw-bold`}
              style={{ minWidth: 90, textAlign: 'center' }}>
              {b.label}
            </div>
          ))}
        </div>
      </ExampleBox>

      <h4 className="mt-4 pt-3 border-top">🖼️ Képek (Images)</h4>
      <CodeBlock
        label="Minden projektben használt kép osztályok"
        code={`<img src="kep.jpg" class="img-fluid" alt="Leírás">\n<img src="kep.jpg" class="img-fluid rounded" alt="Leírás">\n<img src="kep.jpg" class="img-fluid w-100" alt="Leírás">`}
      />
      <ExampleBox label="Előnézet">
        <div className="row">
          <div className="col-4">
            <div className="bg-secondary rounded d-flex align-items-center justify-content-center text-white mb-1" style={{ height: 80 }}>
              img-fluid
            </div>
          </div>
          <div className="col-4">
            <div className="bg-secondary rounded d-flex align-items-center justify-content-center text-white mb-1" style={{ height: 80 }}>
              img-fluid + rounded
            </div>
          </div>
          <div className="col-4">
            <div className="bg-secondary d-flex align-items-center justify-content-center text-white mb-1" style={{ height: 80 }}>
              img-fluid + w-100
            </div>
          </div>
        </div>
      </ExampleBox>
    </DocSection>
  );
}
