import { useState, useEffect, useCallback, useMemo } from 'react';
import OverviewDocs from './docs/OverviewDocs';
import BootstrapDocs from './docs/BootstrapDocs';
import GridDocs from './docs/GridDocs';
import TypographyDocs from './docs/TypographyDocs';
import ComponentsDocs from './docs/ComponentsDocs';
import UtilitiesDocs from './docs/UtilitiesDocs';
import CustomCSSDocs from './docs/CustomCSSDocs';

/* ---- Data ---- */
const sections = [
  { id: 'overview', label: 'Áttekintés', icon: '📋', keywords: 'áttekintés bootstrap verzió technológia html szerkezet' },
  { id: 'bootstrap', label: 'Bootstrap 5 Referencia', icon: '🥾', keywords: 'layout grid konténer tipográfia táblázat kép űrlap accordion breadcrumb carousel collapse dropdown modal nav tab pagination progress spinner toast tooltip popover' },
  { id: 'grid', label: 'Grid Rendszer', icon: '📐', keywords: 'grid rács oszlop töréspont col sm md lg xl xxl row' },
  { id: 'typography', label: 'Tipográfia', icon: '🔤', keywords: 'fejléc display szöveg szín igazítás lead muted mark del ins strong em' },
  { id: 'components', label: 'Komponensek', icon: '🧩', keywords: 'navbar card table alert badge button list-group hero kártya táblázat gomb jelvény lista' },
  { id: 'utilities', label: 'Segédosztályok', icon: '🛠️', keywords: 'spacing margin padding display flex float width height background border shadow' },
  { id: 'custom-css', label: 'Egyedi CSS', icon: '🎨', keywords: 'gradiens árnyék first-letter scrollbar text-indent háttérkép akcio oldalcim fejlec' },
];

function matchSection(item, query) {
  const q = query.toLowerCase();
  return item.label.toLowerCase().includes(q) || item.keywords.toLowerCase().includes(q);
}

function useScrollSpy(sectionIds, offset = 80) {
  const [active, setActive] = useState(sectionIds[0]);
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [sectionIds, offset]);
  return active;
}

export default function Docs() {
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sectionIds = useMemo(() => sections.map(s => s.id), []);
  const activeId = useScrollSpy(sectionIds);

  const filtered = useMemo(
    () => (search ? sections.filter(s => matchSection(s, search)) : sections),
    [search]
  );

  const scrollTo = useCallback((id) => {
    setSidebarOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const contentEls = useMemo(() => [
    <OverviewDocs key="overview" />,
    <BootstrapDocs key="bootstrap" />,
    <GridDocs key="grid" />,
    <TypographyDocs key="typography" />,
    <ComponentsDocs key="components" />,
    <UtilitiesDocs key="utilities" />,
    <CustomCSSDocs key="custom-css" />,
  ], []);

  const visibleIds = useMemo(() => new Set(filtered.map(s => s.id)), [filtered]);
  const sectionMap = useMemo(() => {
    const m = {};
    sections.forEach((s, i) => { m[s.id] = contentEls[i]; });
    return m;
  }, [contentEls]);

  return (
    <div className="docs-layout">
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* ---- Sidebar ---- */}
      <aside className={`docs-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <span className="brand-icon">📚</span>
          <div>
            <strong>Bootstrap 5</strong>
            <small>+ CSS Docs</small>
          </div>
        </div>

        <div className="sidebar-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Keresés..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && <button className="search-clear" onClick={() => setSearch('')}>✕</button>}
        </div>

        <nav className="sidebar-nav">
          {filtered.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`sidebar-link ${activeId === item.id ? 'active' : ''}`}
              onClick={e => { e.preventDefault(); scrollTo(item.id); }}
            >
              <span className="link-icon">{item.icon}</span>
              <span className="link-label">{item.label}</span>
            </a>
          ))}
          {filtered.length === 0 && (
            <div className="no-results">
              <p>Nincs találat</p>
              <small>Próbálj más kulcsszavakat</small>
            </div>
          )}
        </nav>

        <div className="sidebar-footer">
          <small>Bun · React · Vite · Bootstrap 5.3</small>
        </div>
      </aside>

      {/* ---- Mobile header ---- */}
      <header className="docs-mobile-header">
        <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '✕' : '☰'}
        </button>
        <span className="mobile-brand">📚 Bootstrap 5 + CSS Docs</span>
      </header>

      {/* ---- Main Content ---- */}
      <main className="docs-main">
        <div className="docs-hero">
          <h1>Bootstrap 5 + CSS Dokumentáció</h1>
          <p>
            Gyorsreferencia kódpéldákkal és interaktív előnézetekkel.
            Keress rá bármelyik komponensre, osztályra vagy CSS tulajdonságra.
          </p>
          <div className="hero-badges">
            <span className="badge bg-primary">Bootstrap 5.3</span>
            <span className="badge bg-secondary">React 18</span>
            <span className="badge bg-success">Vite 5</span>
            <span className="badge bg-info">Bun</span>
          </div>
        </div>

        <div className="docs-content">
          {sections.map(s =>
            visibleIds.has(s.id) ? (
              <div key={s.id} style={search ? { animation: 'fadeIn 0.3s ease' } : undefined}>
                {sectionMap[s.id]}
              </div>
            ) : null
          )}
        </div>

        <footer className="docs-footer">
          <p>Bootstrap 5 + CSS Docs — Bun + React + Vite</p>
        </footer>
      </main>
    </div>
  );
}
