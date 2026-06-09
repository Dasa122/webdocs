import { useState } from 'react';

export function CodeBlock({ code, lang = 'html', label }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-block mb-4">
      {label && (
        <div className="code-label px-3 py-1 bg-secondary text-white small rounded-top d-flex justify-content-between align-items-center">
          <span>{label}</span>
          <button className="btn btn-sm btn-outline-light border-0" onClick={copy}>
            {copied ? '✓ Másolva' : '📋 Másol'}
          </button>
        </div>
      )}
      <pre className="bg-dark text-light p-3 rounded-bottom mb-0" style={{ overflow: 'auto' }}>
        <code className={`language-${lang}`}>{code}</code>
      </pre>
    </div>
  );
}

export function ExampleBox({ children, label }) {
  return (
    <div className="example-box mb-4">
      {label && (
        <div className="px-3 py-1 bg-info text-white small rounded-top">
          🖼️ {label}
        </div>
      )}
      <div className="p-3 border rounded-bottom bg-white">{children}</div>
    </div>
  );
}

export function DocSection({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: '3.5rem', paddingBottom: '2rem', borderBottom: '1px solid #e2e8f0' }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
