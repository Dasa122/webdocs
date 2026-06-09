import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function GridDocs() {
  return (
    <DocSection id="grid" title="📐 Grid & Konténer">
      <p>A Bootstrap 12-oszlopos grid rendszere. A <code>.container</code> középre zárt, fix szélességű dobozt hoz létre.</p>

      <h4>.container — a teljes oldal kerete</h4>
      <CodeBlock
        label="index.html"
        code={`<div class="container">\n  <div class="row">\n    <div class="col-sm-12 cellaHatter">\n      <!-- tartalom -->\n    </div>\n  </div>\n</div>`}
      />

      <h4>Reszponzív oszlopok — col-sm-*, col-md-*, col-lg-*</h4>
      <p>A fájlban három különböző töréspont kombináció látható:</p>
      <CodeBlock
        label="index.html — 3 féle grid minta"
        code={`<!-- 1. Reszponzív 3-oszlop: mobil 8+4, tablet 6+6, desktop 2+10 -->\n<div class="col-sm-8 col-md-6 col-lg-2">...</div>\n<div class="col-sm-4 col-md-6 col-lg-10">...</div>\n\n<!-- 2. Reszponzív 3-oszlop: mobil 4+4+4, tablet 3+6+3 -->\n<div class="col-sm-4 col-md-3">1.</div>\n<div class="col-sm-4 col-md-6">2.</div>\n<div class="col-sm-4 col-md-3">3.</div>\n\n<!-- 3. Képgaléria: mobil 4+4+4, tablet 2+2+2 -->\n<div class="col-sm-4 col-md-2">\n  <img class="img-fluid w-100" src="kep.jpg" alt="">\n</div>`}
      />
      <ExampleBox label="Előnézet — Reszponzív 3 oszlop">
        <div className="row text-center small">
          <div className="col-sm-8 col-md-6 col-lg-2 mb-1"><div className="bg-primary text-white rounded p-2">col-sm-8<br/>col-md-6<br/>col-lg-2</div></div>
          <div className="col-sm-4 col-md-6 col-lg-10 mb-1"><div className="bg-success text-white rounded p-2">col-sm-4<br/>col-md-6<br/>col-lg-10</div></div>
        </div>
        <div className="row text-center small mt-2">
          <div className="col-sm-4 col-md-3 mb-1"><div className="bg-warning rounded p-2">col-sm-4<br/>col-md-3</div></div>
          <div className="col-sm-4 col-md-6 mb-1"><div className="bg-danger text-white rounded p-2">col-sm-4<br/>col-md-6</div></div>
          <div className="col-sm-4 col-md-3 mb-1"><div className="bg-info text-white rounded p-2">col-sm-4<br/>col-md-3</div></div>
        </div>
      </ExampleBox>
    </DocSection>
  );
}
