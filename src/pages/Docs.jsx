import OverviewDocs from './docs/OverviewDocs';
import BootstrapDocs from './docs/BootstrapDocs';
import GridDocs from './docs/GridDocs';
import TypographyDocs from './docs/TypographyDocs';
import ComponentsDocs from './docs/ComponentsDocs';
import UtilitiesDocs from './docs/UtilitiesDocs';
import CustomCSSDocs from './docs/CustomCSSDocs';

const sidebarItems = [
  { id: 'overview', label: '📋 Áttekintés' },
  { id: 'bootstrap', label: '🥾 Bootstrap 5 Referencia' },
  { id: 'grid', label: '📐 Grid Rendszer' },
  { id: 'typography', label: '🔤 Tipográfia' },
  { id: 'components', label: '🧩 Komponensek' },
  { id: 'utilities', label: '🛠️ Segédosztályok' },
  { id: 'custom-css', label: '🎨 Egyedi CSS' },
];

export default function Docs() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container-fluid app-container">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar p-3" style={{ minHeight: '100vh', borderRight: '1px solid #dee2e6' }}>
          <h5 className="mb-3">
            <strong>📚 Bootstrap 5 + CSS Docs</strong>
          </h5>
          <h6 className="text-muted text-uppercase small mb-2">Dokumentáció</h6>
          <ul className="nav flex-column">
            {sidebarItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="nav-link px-2 py-1 sidebar-link"
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <hr />
          <div className="small text-muted mt-3">
            <p className="mb-1"><strong>Tartalom:</strong></p>
            <ul className="list-unstyled ps-2 small">
              <li>• Grid rendszer</li>
              <li>• Tipográfia</li>
              <li>• Komponensek A-Z</li>
              <li>• Segédosztályok</li>
              <li>• Egyedi CSS minták</li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-4 py-4">
          <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
            <h1 className="mb-0">
              📚 Bootstrap & CSS Dokumentáció
            </h1>
            <span className="badge bg-info">v1.0</span>
          </div>

          <p className="lead text-muted mb-4">
            Bootstrap 5 + CSS gyors referencia — komponensek, segédosztályok és egyedi stílusok
            kódpéldákkal és interaktív előnézetekkel. Másold ki, próbáld ki.
          </p>

          <OverviewDocs />
          <BootstrapDocs />
          <GridDocs />
          <TypographyDocs />
          <ComponentsDocs />
          <UtilitiesDocs />
          <CustomCSSDocs />

          <footer className="text-center text-muted py-4 mt-5 border-top">
            <small>Bootstrap 5 + CSS Docs — Bun + React + Vite</small>
          </footer>
        </main>
      </div>

      {/* Sidebar link styles */}
      <style>{`
        .sidebar-link {
          color: #495057;
          border-radius: 4px;
          transition: all 0.15s ease;
        }
        .sidebar-link:hover {
          background-color: #e9ecef;
          color: #0d6efd;
        }
        .code-block pre {
          font-size: 0.85rem;
        }
        .example-box {
          break-inside: avoid;
        }
      `}</style>
    </div>
  );
}
