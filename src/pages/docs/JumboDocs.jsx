import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function JumboDocs() {
  return (
    <DocSection id="jumbo" title="🎯 Fejléc (Jumbotron-szerű)">
      <p>A Bootstrap 5-ben nincs külön <code>.jumbotron</code> osztály, helyette padding + háttérszín + lekerekítés kombinációjával készíthető.</p>

      <h4>Használat a fájlban</h4>
      <CodeBlock
        label="index.html — fejléc"
        code={`<div class="mt-4 p-5 bg-warning text-white rounded">\n  <h1>Teszt feladat</h1>\n  <p>Valamilyen szöveg az alcím alatt, vagy idézet, ...</p>\n</div>`}
      />
      <ExampleBox label="Előnézet">
        <div className="mt-2 p-5 bg-warning text-white rounded">
          <h1>Teszt feladat</h1>
          <p>Valamilyen szöveg az alcím alatt, vagy idézet, ...</p>
        </div>
      </ExampleBox>

      <h4>Használt osztályok</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-light"><tr><th>Osztály</th><th>Jelentés</th></tr></thead>
          <tbody>
            <tr><td><code>mt-4</code></td><td>Margin-top 1.5rem</td></tr>
            <tr><td><code>p-5</code></td><td>Padding 3rem (nagy belső térköz)</td></tr>
            <tr><td><code>bg-warning</code></td><td>Sárga háttérszín</td></tr>
            <tr><td><code>text-white</code></td><td>Fehér szöveg</td></tr>
            <tr><td><code>rounded</code></td><td>Lekerekített sarkok</td></tr>
          </tbody>
        </table>
      </div>
    </DocSection>
  );
}
