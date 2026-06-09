import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function FloatDocs() {
  return (
    <DocSection id="float" title="↔️ Lebegtetés & Lábléc">
      <p>Az <code>float-start</code> és <code>float-end</code> osztályokkal balra-jobbra igazítható, a <code>clearfix</code> törli az úsztatást.</p>

      <h4>Használat a fájlban — lábléc</h4>
      <CodeBlock
        label="index.html — lábléc"
        code={`<div class="clearfix">\n  <span class="float-start">\n    <b>Készítette:</b> Gipsz Kati\n  </span>\n  <span class="float-end">\n    <i>Készítés dátuma:</i> 2026.06.16.\n  </span>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="clearfix border rounded p-3 bg-light">
          <span className="float-start"><b>Készítette:</b> Gipsz Kati</span>
          <span className="float-end"><i>Készítés dátuma:</i> 2026.06.16.</span>
        </div>
      </ExampleBox>

      <h4>Használt osztályok és tagek</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-light"><tr><th>Osztály / Tag</th><th>Hatás</th></tr></thead>
          <tbody>
            <tr><td><code>float-start</code></td><td>Balra úsztatás</td></tr>
            <tr><td><code>float-end</code></td><td>Jobbra úsztatás</td></tr>
            <tr><td><code>clearfix</code></td><td>Úsztatás törlése (clear: both)</td></tr>
            <tr><td><code>&lt;b&gt;</code></td><td>Félkövér szöveg</td></tr>
            <tr><td><code>&lt;i&gt;</code></td><td>Dőlt (italic) szöveg</td></tr>
          </tbody>
        </table>
      </div>
    </DocSection>
  );
}
