import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function CustomCSSDocs() {
  return (
    <DocSection id="custom-css" title="🎨 Egyedi CSS Minták és Haladó Stílusok">
      <p>
        Hasznos egyedi CSS szabályok, amelyek kiegészítik a Bootstrap keretrendszert.
      </p>

      {/* Akcio */}
      <h4 className="mt-4 pt-3 border-top">🏷️ Kiemelt Ár — <code>.akcio</code></h4>
      <CodeBlock
        label="Egyedi CSS"
        code={`.akcio {\n  color: rgb(255, 100, 100);\n  font-weight: bold;\n  text-decoration: underline;\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <p className="akcio">64 999 Ft-tól</p>
        <p className="akcio">869 999 Ft-tól</p>
      </ExampleBox>

      {/* Fejlec */}
      <h4 className="mt-4 pt-3 border-top">🖼️ Fejléc Háttérképpel — <code>#fejlec</code></h4>
      <CodeBlock
        label="Egyedi CSS"
        code={`#fejlec {\n  background-image: url('fejlec.jpg');\n  background-position: top right;\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 150px;\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <div className="rounded d-flex align-items-center p-3 mb-2" style={{
          background: 'linear-gradient(135deg, #4c0e5e 0%, #7b1fa2 50%, #e0e0e0 100%)',
          height: 120,
        }}>
          <span className="text-white fw-bold fs-4">Fejléc háttérképpel</span>
        </div>
      </ExampleBox>

      {/* Gradiens */}
      <h4 className="mt-4 pt-3 border-top">🌈 Gradiens Szöveg</h4>
      <CodeBlock
        label="Egyedi CSS"
        code={`#gradient_piros_feher_zold {\n  background: linear-gradient(to right, red, white, green);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  /* Nemzeti színek: piros-fehér-zöld */\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <h3 style={{
          background: 'linear-gradient(to right, #cd0000, white, #006600)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
        }}>
          Piros — Fehér — Zöld Gradiens Szöveg
        </h3>
      </ExampleBox>

      {/* Body Gradient */}
      <h4 className="mt-4 pt-3 border-top">📄 Oldalháttér Gradiens — <code>body</code></h4>
      <CodeBlock
        label="Egyedi CSS"
        code={`body {\n  background: linear-gradient(to bottom,\n    white, green, red);\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <div className="rounded p-4 text-center text-white fw-bold" style={{
          background: 'linear-gradient(to bottom, white, #4caf50, #cd0000)',
          height: 100,
        }}>
          <span style={{ color: '#333' }}>Fehér →</span>{' '}
          <span style={{ color: '#1b5e20' }}>Zöld →</span>{' '}
          <span style={{ color: '#b71c1c' }}>Piros</span>
        </div>
      </ExampleBox>

      {/* Cell Backgrounds */}
      <h4 className="mt-4 pt-3 border-top">📦 Cella Háttérszínek — <code>.cellaHatter</code></h4>
      <CodeBlock
        label="Egyedi CSS"
        code={`.cellaHatter  { background-color: rgb(238, 233, 226); }\n.cellaHatter2 { background-color: rgb(238, 233, 226); }\n.cellaHatter3 { background-color: rgb(238, 233, 226); }`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <div className="row text-center">
          {[1, 2, 3].map((i) => (
            <div className="col-4" key={i}>
              <div className="p-3 rounded border" style={{ backgroundColor: 'rgb(238, 233, 226)' }}>
                .cellaHatter{i} — Meleg bézs
              </div>
            </div>
          ))}
        </div>
      </ExampleBox>

      {/* First Letter */}
      <h4 className="mt-4 pt-3 border-top">🔤 Első Betű Kiemelése — <code>::first-letter</code></h4>
      <CodeBlock
        label="Egyedi CSS"
        code={`.list-group-item::first-letter {\n  color: red; /* Piros első betű */\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <ul className="list-group">
          <li className="list-group-item"><span style={{ color: 'red', fontWeight: 'bold', fontSize: '1.5em' }}>E</span>lső tétel — piros kezdőbetűvel</li>
          <li className="list-group-item"><span style={{ color: 'red', fontWeight: 'bold', fontSize: '1.5em' }}>M</span>ásodik tétel — piros kezdőbetűvel</li>
          <li className="list-group-item"><span style={{ color: 'red', fontWeight: 'bold', fontSize: '1.5em' }}>H</span>armadik tétel — piros kezdőbetűvel</li>
        </ul>
      </ExampleBox>

      {/* Footer */}
      <h4 className="mt-4 pt-3 border-top">🦶 Egyedi Lábléc — <code>footer</code></h4>
      <CodeBlock
        label="Egyedi CSS"
        code={`footer {\n  background-color: #4c0e5e; /* Lila/bordó */\n}\nfooter a {\n  color: white;\n  text-decoration: none;\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <footer className="rounded p-3 text-white" style={{ backgroundColor: '#4c0e5e' }}>
          <p className="mb-1">© 2026 — Minden jog fenntartva</p>
          <a href="#s" className="text-white text-decoration-none">Kapcsolat</a>
          {' | '}
          <a href="#s" className="text-white text-decoration-none">Adatvédelem</a>
        </footer>
      </ExampleBox>

      {/* Scrollbar */}
      <h4 className="mt-4 pt-3 border-top">📜 Mindig Látható Scrollbar</h4>
      <CodeBlock
        label="Egyedi CSS"
        code={`html {\n  overflow-y: scroll; /* Mindig látszik a görgetősáv */\n}`}
        lang="css"
      />
      <p className="text-muted">
        Ez a szabály megakadályozza, hogy az oldal "ugráljon" amikor a scrollbar megjelenik/eltűnik 
        a rövid és hosszú oldalak között váltáskor. <strong>Gyakori minta.</strong>
      </p>

      {/* Text Indent */}
      <h4 className="mt-4 pt-3 border-top">📝 Bekezdés Behúzás — <code>text-indent</code></h4>
      <CodeBlock
        label="Egyedi CSS"
        code={`p {\n  text-align: justify;\n  text-indent: 20px;\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <p style={{ textAlign: 'justify', textIndent: '20px' }}>
          Ez a bekezdés 20px-es behúzással kezdődik. A Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ez a stílus a hagyományos nyomtatott szövegek megjelenését idézi.
        </p>
      </ExampleBox>

      {/* Overlay text */}
      <h4 className="mt-4 pt-3 border-top">🌑 Árnyékolt Szöveg</h4>
      <CodeBlock
        label="Egyedi CSS"
        code={`.shadow {\n  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <h3 className="mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          Árnyékolt Szöveg
        </h3>
        <p style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
          Ez a szöveg finom árnyékkal jelenik meg, ami mélységet ad a tipográfiának.
        </p>
      </ExampleBox>
    </DocSection>
  );
}
