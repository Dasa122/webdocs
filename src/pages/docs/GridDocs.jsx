import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function GridDocs() {
  return (
    <DocSection id="grid" title="📐 Bootstrap Grid Rendszer">
      <p>
        A projektekben a Bootstrap 12-oszlopos grid rendszerét használjuk reszponzív elrendezések építésére.
        Az alábbi töréspontok érhetők el:
      </p>

      <div className="table-responsive mb-4">
        <table className="table table-bordered table-sm">
          <thead className="table-light">
            <tr><th>Prefix</th><th>Min. szélesség</th><th>Használat a projektekben</th></tr>
          </thead>
          <tbody>
            <tr><td><code>col-*</code></td><td>&lt; 576px</td><td>Mobil elsődleges</td></tr>
            <tr><td><code>col-sm-*</code></td><td>≥ 576px</td><td>✅ Gyakori (alap elrendezés)</td></tr>
            <tr><td><code>col-md-*</code></td><td>≥ 768px</td><td>✅ Gyakori (tablet, kisebb desktop)</td></tr>
            <tr><td><code>col-lg-*</code></td><td>≥ 992px</td><td>✅ Használt (desktop, navbar)</td></tr>
          </tbody>
        </table>
      </div>

      <h4>4 Oszlopos Termékkártya Rács</h4>
      <p>
        A <strong>minigépek</strong> projektben használt minta: mobil nézetben 2 oszlop (<code>col-sm-6</code>),
        asztali nézetben 4 oszlop (<code>col-md-3</code>).
      </p>
      <CodeBlock
        label="Használat: index.html"
        code={`<div class="row" id="napi_ajanlataink">\n  <div class="col-sm-12">\n    <h3>Napi ajánlataink</h3>\n  </div>\n  <!-- 4 termék, mobil: 2 oszlop, asztali: 4 oszlop -->\n  <div class="col-sm-6 col-md-3 mb-3">\n    <h3 class="text-warning">ASUS</h3>\n    <img src="" class="img-fluid" alt="Termék">\n    <p class="akcio">64 999 Ft-tól</p>\n  </div>\n  <div class="col-sm-6 col-md-3 mb-3">\n    <h3 class="text-danger">UMAX</h3>\n    <img src="" class="img-fluid" alt="Termék">\n    <p class="akcio">65 240 Ft-tól</p>\n  </div>\n  <div class="col-sm-6 col-md-3 mb-3">\n    <h3 class="text-success">Apple</h3>\n    <img src="" class="img-fluid" alt="Termék">\n    <p class="akcio">869 999 Ft-tól</p>\n  </div>\n  <div class="col-sm-6 col-md-3 mb-3">\n    <h3 class="text-primary">Intel</h3>\n    <img src="" class="img-fluid" alt="Termék">\n    <p class="akcio">92 170 Ft-tól</p>\n  </div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="row text-center">
          <div className="col-sm-6 col-md-3 mb-2">
            <div className="bg-light border p-3">
              <h5 className="text-warning">ASUS</h5>
              <div className="bg-secondary rounded" style={{ height: 80 }} />
              <small className="text-danger fw-bold">64 999 Ft</small>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 mb-2">
            <div className="bg-light border p-3">
              <h5 className="text-danger">UMAX</h5>
              <div className="bg-secondary rounded" style={{ height: 80 }} />
              <small className="text-danger fw-bold">65 240 Ft</small>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 mb-2">
            <div className="bg-light border p-3">
              <h5 className="text-success">Apple</h5>
              <div className="bg-secondary rounded" style={{ height: 80 }} />
              <small className="text-danger fw-bold">869 999 Ft</small>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 mb-2">
            <div className="bg-light border p-3">
              <h5 className="text-primary">Intel</h5>
              <div className="bg-secondary rounded" style={{ height: 80 }} />
              <small className="text-danger fw-bold">92 170 Ft</small>
            </div>
          </div>
        </div>
      </ExampleBox>

      <h4>3 Oszlopos Képgaléria</h4>
      <p>A <strong>turizmus</strong> és <strong>tömegközlekedés</strong> projektekben használt minta.</p>
      <CodeBlock
        label="Használat: turizmus_es_vendeglatas.html"
        code={`<div class="row">\n  <div class="col-sm-4 col-md-2">\n    <img class="img-fluid w-100" src="kep.jpg" alt="Kép">\n  </div>\n  <div class="col-sm-4 col-md-2">\n    <img class="img-fluid w-100" src="kep.jpg" alt="Kép">\n  </div>\n  <!-- ... további 4 kép ... -->\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="row text-center">
          {['A', 'B', 'C', 'D', 'E', 'F'].map((x) => (
            <div className="col-4 col-md-2 mb-2" key={x}>
              <div className="bg-info text-white rounded d-flex align-items-center justify-content-center" style={{ height: 60 }}>
                Kép {x}
              </div>
            </div>
          ))}
        </div>
      </ExampleBox>

      <h4>2 Oszlopos Kártya Elrendezés (Kapcsolat)</h4>
      <CodeBlock
        label="Használat: index.html — Kapcsolat szekció"
        code={`<div class="row" id="kapcsolat">\n  <div class="col-sm-12">\n    <h3>Kapcsolat</h3>\n  </div>\n  <div class="col-sm-6">\n    <div class="card mb-3">\n      <div class="card-header bg-info text-white">Cím</div>\n      <div class="card-body">\n        <p>1146 Budapest, Thököly út 48-54.</p>\n      </div>\n    </div>\n  </div>\n  <div class="col-sm-6">\n    <div class="card mb-3">\n      <div class="card-header bg-info text-white">Email/Telefon</div>\n      <div class="card-body">\n        <p>info@petrik.hu</p>\n      </div>\n    </div>\n  </div>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="row">
          <div className="col-sm-6 mb-2">
            <div className="card">
              <div className="card-header bg-info text-white">Cím</div>
              <div className="card-body"><p className="mb-0">1146 Budapest, Thököly út 48-54.</p></div>
            </div>
          </div>
          <div className="col-sm-6 mb-2">
            <div className="card">
              <div className="card-header bg-info text-white">Email/Telefon</div>
              <div className="card-body"><p className="mb-0">info@pelda.hu | +36 70 123 4567</p></div>
            </div>
          </div>
        </div>
      </ExampleBox>
    </DocSection>
  );
}
