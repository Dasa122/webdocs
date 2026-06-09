import { DocSection, CodeBlock, ExampleBox } from './DocComponents';

export default function TypographyDocs() {
  return (
    <DocSection id="typography" title="🔤 Tipográfia és Szövegformázás">
      <p>
        Bootstrap tipográfiai osztályok és gyakori egyedi szövegstílusok.
      </p>

      <h4>Fejlécek (h1–h6)</h4>
      <p>Egyedi fejléc színek CSS-ben — lila és bordó változat.</p>
      <CodeBlock
        label="Egyedi CSS — lila fejléc"
        code={`h1 {\n  color: rgb(77, 56, 194); /* Lila fejléc */\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <h1 style={{ color: 'rgb(77, 56, 194)' }}>Fejléc 1 – Lila</h1>
        <h2 style={{ color: '#4c0e5e' }}>Fejléc 2 – Bordó</h2>
        <h3>Fejléc 3 – Alapértelmezett</h3>
        <h4 className="text-muted">Fejléc 4 – Halvány</h4>
        <h5>Fejléc 5</h5>
        <h6>Fejléc 6</h6>
      </ExampleBox>

      <h4>Szövegszínek</h4>
      <p>A Bootstrap szövegszín osztályok használata:</p>
      <CodeBlock
        label="Használat: termékkártyák márkaszínei"
        code={`<h3 class="text-warning">ASUS</h3>\n<h3 class="text-danger">UMAX</h3>\n<h3 class="text-success">Apple</h3>\n<h3 class="text-primary">Intel</h3>`}
      />
      <ExampleBox label="Előnézet">
        <p className="text-warning fs-4"><strong>text-warning</strong> — Figyelmeztető sárga</p>
        <p className="text-danger fs-4"><strong>text-danger</strong> — Veszély piros</p>
        <p className="text-success fs-4"><strong>text-success</strong> — Sikeres zöld</p>
        <p className="text-primary fs-4"><strong>text-primary</strong> — Elsődleges kék</p>
        <p className="text-info fs-4"><strong>text-info</strong> — Információs cián</p>
        <p className="text-white bg-dark p-2 fs-4"><strong>text-white</strong> — Fehér (sötét háttéren)</p>
      </ExampleBox>

      <h4>Oldalcím Stílus — <code>#oldalcim</code></h4>
      <p>Nagy méretű, nagybetűs, dőlt főcím stílus:</p>
      <CodeBlock
        label="Egyedi CSS"
        code={`#oldalcim {\n  font-size: 300%;\n  text-transform: uppercase;\n  font-style: italic;\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <h1 style={{ fontSize: '300%', textTransform: 'uppercase', fontStyle: 'italic' }}>
          Példa Cím
        </h1>
      </ExampleBox>

      <h4>Szöveg Igazítás</h4>
      <CodeBlock
        label="Sorkizárt szöveg"
        code={`p {\n  text-align: justify; /* Sorkizárt szöveg */\n  font-size: 15px;\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <p className="text-center border p-2"><code>text-center</code> — Középre igazított</p>
        <p className="border p-2" style={{ textAlign: 'justify' }}>
          <code>text-align: justify</code> — Ez egy hosszabb példa szöveg, amely demonstrálja a sorkizárt igazítást. 
          A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </ExampleBox>

      <h4>Piros Kiemelés — <code>.piros</code></h4>
      <p>Egyedi piros szövegkiemelő osztály:</p>
      <CodeBlock
        label="Egyedi CSS"
        code={`.piros {\n  color: rgb(197, 17, 17);\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <p className="fw-bold" style={{ color: 'rgb(197, 17, 17)' }}>
          Ez egy piros kiemelt szöveg — fontos figyelmeztetésekhez használva.
        </p>
      </ExampleBox>

      <h4>Dőlt Stílus — <code>oblique</code></h4>
      <CodeBlock
        label="Egyedi CSS"
        code={`.oblique-text {\n  font-style: oblique; /* Dőlt stílus */\n}`}
        lang="css"
      />
      <ExampleBox label="Előnézet">
        <p style={{ fontStyle: 'oblique', fontSize: '1.2rem' }}>
          Ez egy ferde (oblique) stílusú szöveg — dekoratív elemekhez.
        </p>
      </ExampleBox>
    </DocSection>
  );
}
