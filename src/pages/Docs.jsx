import { Link } from 'react-router-dom';
import OverviewDocs from './docs/OverviewDocs';
import GridDocs from './docs/GridDocs';
import TypographyDocs from './docs/TypographyDocs';
import ComponentsDocs from './docs/ComponentsDocs';
import UtilitiesDocs from './docs/UtilitiesDocs';
import CustomCSSDocs from './docs/CustomCSSDocs';

const sidebarItems = [
  { id: 'overview', label: '📋 Áttekintés' },
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
            <Link to="/" className="text-decoration-none">← Kezdőlap</Link>
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
            <p className="mb-1"><strong>Projektek:</strong></p>
            <ul className="list-unstyled ps-2 small">
              <li>• minigépek</li>
              <li>• turizmus</li>
              <li>• tömegközlekedés</li>
              <li>• hungarikum</li>
              <li>• web_forras</li>
              <li>• jegyzet</li>
              <li>• 1956 forradalom</li>
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
            Teljes körű referencia a projektekben használt összes Bootstrap komponensről,
            segédosztályról és egyedi CSS mintáról. Minden szekció tartalmazza a valós kódmintákat
            és interaktív előnézeteket.
          </p>

          <OverviewDocs />
          <GridDocs />
          <TypographyDocs />
          <ComponentsDocs />
          <UtilitiesDocs />
          <CustomCSSDocs />

          <footer className="text-center text-muted py-4 mt-5 border-top">
            <p>
              <span className="badge bg-info me-2">Czikkely Imre</span>
              <span className="badge bg-info me-2">10.E</span>
              <span className="badge bg-secondary">2026.06.09.</span>
            </p>
            <small>Dokumentáció a webgyak projektek alapján — Bootstrap 5 + Egyedi CSS</small>
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
