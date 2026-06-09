import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function CustomCSSDocs() {
  return (
    <DocSection id="custom-css" title="🎨 Egyedi CSS (egyeni.css)">
      <div className="alert alert-info">
        <strong>Forrás:</strong> <code>cinko/001_jegyzet/css/egyeni.css</code> — a Bootstrap-et kiegészítő egyedi stílusok.
      </div>

      {/* h1 */}
      <h4>🎨 Fejléc szín — <code>h1</code></h4>
      <CodeBlock
        label="egyeni.css"
        code={`h1 {\n  color: rgb(77, 56, 194); /* Lila fejléc */\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <h1 style={{ color: 'rgb(77, 56, 194)' }}>Lila fejléc (h1)</h1>
      </ExampleBox>

      {/* cellaHatter */}
      <h4>📦 Cella háttérszín — <code>.cellaHatter</code></h4>
      <CodeBlock
        label="egyeni.css"
        code={`.cellaHatter  { background-color: rgb(238, 233, 226); }\n.cellaHatter2 { background-color: rgb(238, 233, 226); }\n.cellaHatter3 { background-color: rgb(238, 233, 226); }`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <div className="row text-center">
          {[1, 2, 3].map(i => (
            <div className="col-4" key={i}>
              <div className="p-3 border rounded" style={{ backgroundColor: 'rgb(238, 233, 226)' }}>
                .cellaHatter{i} — meleg bézs
              </div>
            </div>
          ))}
        </div>
      </ExampleBox>

      {/* felkoverSzoveg */}
      <h4>💪 Félkövér szöveg — <code>.felkoverSzoveg</code></h4>
      <CodeBlock
        label="egyeni.css"
        code={`.felkoverSzoveg {\n  font-weight: bold;\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <p className="fw-bold">Ez a szöveg .felkoverSzoveg osztállyal van formázva — félkövér.</p>
      </ExampleBox>

      {/* egyszerVagyok */}
      <h4>🔴 Egyedi kiemelés — <code>#egyszerVagyok</code></h4>
      <CodeBlock
        label="egyeni.css"
        code={`#egyszerVagyok {\n  color: darkred;\n  font-size: 200%; /* Dupla méret */\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <p style={{ color: 'darkred', fontSize: '200%' }}>#egyszerVagyok — sötétpiros, 200% méret</p>
      </ExampleBox>

      {/* body background */}
      <h4>🖼️ Háttérkép — <code>body</code></h4>
      <CodeBlock
        label="egyeni.css"
        code={`body {\n  background-image: url(./../images/images.jfif);\n  background-repeat: repeat;\n  background-size: 50px;\n  background-attachment: fixed;\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <div className="rounded p-4 text-center" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 10px, transparent 10px, transparent 20px)',
          border: '2px dashed #6c757d',
        }}>
          <strong>Háttérkép</strong><br />
          <small>repeat · 50px · fixed</small>
        </div>
      </ExampleBox>

      {/* scrollbar */}
      <h4>📜 Mindig látszó scrollbar — <code>html</code></h4>
      <CodeBlock
        label="egyeni.css"
        code={`html {\n  overflow-y: scroll; /* Mindig látszik a görgetősáv */\n}`}
        lang="css"
      />
      <p className="text-muted">
        Megakadályozza, hogy az oldal tartalma "ugráljon" amikor a scrollbar megjelenik/eltűnik
        a rövid és hosszú oldalak között váltáskor.
      </p>

      {/* Full CSS */}
      <h4>Teljes egyeni.css</h4>
      <CodeBlock
        label="egyeni.css — teljes fájl"
        code={`h1 {\n  color: rgb(77, 56, 194);\n}\n\n.cellaHatter  { background-color: rgb(238, 233, 226); }\n.cellaHatter2 { background-color: rgb(238, 233, 226); }\n.cellaHatter3 { background-color: rgb(238, 233, 226); }\n\n.felkoverSzoveg {\n  font-weight: bold;\n}\n\n#egyszerVagyok {\n  color: darkred;\n  font-size: 200%;\n}\n\nhtml {\n  overflow-y: scroll;\n}\n\nbody {\n  background-image: url(./../images/images.jfif);\n  background-repeat: repeat;\n  background-size: 50px;\n  background-attachment: fixed;\n}`}
        lang="css"
      />
    </DocSection>
  );
}
