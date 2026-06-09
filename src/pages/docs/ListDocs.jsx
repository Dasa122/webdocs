import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function ListDocs() {
  return (
    <DocSection id="lists" title="📋 Listák">
      <p>A Bootstrap <code>list-group</code> komponense rendezetlen és rendezett listákhoz.</p>

      <h4>Rendezetlen lista — ul.list-group</h4>
      <CodeBlock
        label="index.html — rendezetlen lista"
        code={`<ul class="list-group" id="menupont1">\n  <li class="list-group-item">Lorem1</li>\n  <li class="list-group-item">Lorem2</li>\n  <li class="list-group-item">Lorem3</li>\n  <li class="list-group-item"><b>Lorem4</b></li>\n  <li class="list-group-item"><b>Lorem5</b></li>\n</ul>`}
      />
      <ExampleBox label="Előnézet">
        <ul className="list-group mb-3">
          <li className="list-group-item">Első elem</li>
          <li className="list-group-item">Második elem</li>
          <li className="list-group-item">Harmadik elem</li>
          <li className="list-group-item"><b>Félkövér elem</b></li>
          <li className="list-group-item"><b>Másik félkövér</b></li>
        </ul>
      </ExampleBox>

      <h4>Rendezett lista — ol.list-group-numbered</h4>
      <CodeBlock
        label="index.html — rendezett lista"
        code={`<ol class="list-group list-group-numbered" id="menupont2">\n  <li class="list-group-item">Lorem10</li>\n  <li class="list-group-item">Lorem20</li>\n  <li class="list-group-item">Lorem30</li>\n  <li class="list-group-item">Lorem40</li>\n  <li class="list-group-item">Lorem50</li>\n</ol>`}
      />
      <ExampleBox label="Előnézet">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">Első tétel</li>
          <li className="list-group-item">Második tétel</li>
          <li className="list-group-item">Harmadik tétel</li>
          <li className="list-group-item">Negyedik tétel</li>
          <li className="list-group-item">Ötödik tétel</li>
        </ol>
      </ExampleBox>

      <h4>Használt elemek</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-light"><tr><th>Osztály/Elem</th><th>Szerep</th></tr></thead>
          <tbody>
            <tr><td><code>list-group</code></td><td>Lista konténer</td></tr>
            <tr><td><code>list-group-item</code></td><td>Listaelem</td></tr>
            <tr><td><code>list-group-numbered</code></td><td>Számozott lista (ol-lal)</td></tr>
            <tr><td><code>&lt;b&gt;</code></td><td>Félkövér szöveg</td></tr>
          </tbody>
        </table>
      </div>
    </DocSection>
  );
}
