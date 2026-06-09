import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function ImageDocs() {
  return (
    <DocSection id="images" title="🖼️ Képek">
      <p>Reszponzív képek Bootstrap-pel: <code>img-fluid</code> a méretezésért, <code>w-100</code> a teljes szélességért.</p>

      <h4>Használat a fájlban</h4>
      <CodeBlock
        label="index.html — képgaléria"
        code={`<div class="col-sm-4 col-md-2 cellaHatter">\n  <img class="img-fluid w-100"\n       src="./images/103-200x300-blur_5.jpg"\n       alt="kép 1 leírása"\n       title="képleírás szövegbuborékban 1.">\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="row">
          {['#0d6efd', '#198754', '#ffc107'].map((color, i) => (
            <div className="col-sm-4 col-md-2 mb-2" key={i}>
              <div className="rounded d-flex align-items-center justify-content-center text-white fw-bold"
                   style={{ backgroundColor: color, height: 100 }}>
                Kép {i + 1}
              </div>
              <small className="text-muted">img-fluid + w-100</small>
            </div>
          ))}
        </div>
      </ExampleBox>

      <h4>Használt osztályok és attribútumok</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-light"><tr><th>Osztály / Attribútum</th><th>Szerep</th></tr></thead>
          <tbody>
            <tr><td><code>img-fluid</code></td><td>Reszponzív kép: max-width: 100%, height: auto</td></tr>
            <tr><td><code>w-100</code></td><td>Szélesség 100% — kitölti a szülőt</td></tr>
            <tr><td><code>alt="..."</code></td><td>Alternatív szöveg (akadálymentesség)</td></tr>
            <tr><td><code>title="..."</code></td><td>Tooltip szöveg (buborék egér fölé vive)</td></tr>
          </tbody>
        </table>
      </div>
    </DocSection>
  );
}
