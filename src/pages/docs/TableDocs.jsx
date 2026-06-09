import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function TableDocs() {
  return (
    <DocSection id="table" title="📊 Táblázat">
      <p>A Bootstrap <code>table</code> osztályai: alap stílus, keret, hover effekt.</p>

      <h4>Használat a fájlban</h4>
      <CodeBlock
        label="index.html — táblázat"
        code={`<table class="table table-bordered table-hover" id="menupont3">\n  <tr>\n    <th>Sorszám</th>\n    <th>Megnevezés</th>\n  </tr>\n  <tr><td>1</td><td>Alma</td></tr>\n  <tr><td>2</td><td>Dió</td></tr>\n  <tr><td>3</td><td>Körte</td></tr>\n  <tr><td>4</td><td>Avokádó</td></tr>\n  <tr><td>5</td><td>Uborka</td></tr>\n</table>`}
      />
      <ExampleBox label="Előnézet">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr><th>Sorszám</th><th>Megnevezés</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Alma</td></tr>
              <tr><td>2</td><td>Dió</td></tr>
              <tr><td>3</td><td>Körte</td></tr>
              <tr><td>4</td><td>Avokádó</td></tr>
              <tr><td>5</td><td>Uborka</td></tr>
            </tbody>
          </table>
        </div>
      </ExampleBox>

      <h4>Használt osztályok</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-light"><tr><th>Osztály</th><th>Hatás</th></tr></thead>
          <tbody>
            <tr><td><code>table</code></td><td>Alap táblázat stílus</td></tr>
            <tr><td><code>table-bordered</code></td><td>Keret minden cella körül</td></tr>
            <tr><td><code>table-hover</code></td><td>Hover effekt a sorokon</td></tr>
            <tr><td><code>th</code></td><td>Fejléc cella (félkövér, középre)</td></tr>
            <tr><td><code>td</code></td><td>Adat cella</td></tr>
          </tbody>
        </table>
      </div>
    </DocSection>
  );
}
