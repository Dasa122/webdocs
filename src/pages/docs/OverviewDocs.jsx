import { DocSection, CodeBlock } from './DocComponents';

export default function OverviewDocs() {
  return (
    <DocSection id="overview" title="📋 HTML5 Alapszerkezet">
      <div className="alert alert-info">
        <strong>Forrás:</strong> <code>index.html</code> — Bootstrap 5 + egyedi CSS oldal.
      </div>

      <h4>HTML5 Dokumentum Váz</h4>
      <CodeBlock
        label="index.html — teljes váz"
        code={`<!DOCTYPE html>\n<html lang="hu">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Teszt</title>\n    <link rel="stylesheet" href="./css/bootstrap.min.css">\n    <link rel="stylesheet" href="./css/egyeni.css">\n</head>\n\n<body>\n    <div class="container">\n        <!-- Minden tartalom -->\n    </div>\n    <script src="./js/bootstrap.bundle.min.js"></script>\n</body>\n\n</html>`}
      />

      <h4>Kötelező elemek</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-light"><tr><th>Elem</th><th>Szerep</th></tr></thead>
          <tbody>
            <tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>HTML5 deklaráció</td></tr>
            <tr><td><code>lang="hu"</code></td><td>Oldal nyelve (magyar)</td></tr>
            <tr><td><code>meta charset="UTF-8"</code></td><td>Karakterkódolás (ékezetek)</td></tr>
            <tr><td><code>meta name="viewport"</code></td><td>Reszponzivitás mobilon</td></tr>
            <tr><td><code>title</code></td><td>Böngésző fül címe</td></tr>
            <tr><td><code>link rel="stylesheet"</code></td><td>CSS betöltés — bootstrap, majd egyedi</td></tr>
            <tr><td><code>script src</code></td><td>JS betöltés — &lt;/body&gt; előtt</td></tr>
          </tbody>
        </table>
      </div>
    </DocSection>
  );
}
