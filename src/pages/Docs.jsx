import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import OverviewDocs from './docs/OverviewDocs';
import BootstrapDocs from './docs/BootstrapDocs';
import GridDocs from './docs/GridDocs';
import TypographyDocs from './docs/TypographyDocs';
import ComponentsDocs from './docs/ComponentsDocs';
import UtilitiesDocs from './docs/UtilitiesDocs';
import CustomCSSDocs from './docs/CustomCSSDocs';

/* ============================================================
   SIDEBAR TREE — minden szekció + alpontok
   ============================================================ */
const sidebarTree = [
  {
    id: 'overview', icon: '📋', label: 'Áttekintés',
    searchText: 'áttekintés bootstrap verzió technológia html szerkezet kategóriák',
    children: [
      { id: 'overview', label: 'Technológiai stack', anchor: 'overview' },
      { id: 'overview', label: 'HTML alap szerkezet', anchor: 'overview' },
      { id: 'overview', label: 'Dokumentált kategóriák', anchor: 'overview' },
    ],
  },
  {
    id: 'bootstrap', icon: '🥾', label: 'Bootstrap 5 Referencia',
    searchText: 'bootstrap referencia layout grid konténer tipográfia táblázat kép űrlap accordion breadcrumb carousel collapse dropdown modal nav tab pagination progress spinner toast tooltip popover offcanvas',
    children: [
      { id: 'bootstrap', label: 'Layout — Konténerek', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Grid — Töréspontok', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Tipográfia — Fejlécek', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Display fejlécek', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Szövegstílusok és színek', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Táblázatok — table, striped, hover', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Képek — img-fluid, thumbnail', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Űrlapok — form-control, label', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Accordion (lenyíló panel)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Breadcrumb (morzsa)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Button Group (gombcsoport)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Carousel (diavetítés)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Close Button (bezáró gomb)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Collapse (összecsukás)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Dropdown (lenyíló menü)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Modal (felugró ablak)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Navs & Tabs (fülek)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Offcanvas (oldalsó panel)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Pagination (lapozó)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Progress (folyamatjelző)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Scrollspy (görgetés követő)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Spinners (betöltő animáció)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Toasts (értesítések)', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Tooltips & Popovers', anchor: 'bootstrap' },
      { id: 'bootstrap', label: 'Segédosztályok — Borders, Flex, Shadow', anchor: 'bootstrap' },
    ],
  },
  {
    id: 'grid', icon: '📐', label: 'Grid Rendszer',
    searchText: 'grid rács oszlop töréspont col sm md lg xl xxl row konténer container',
    children: [
      { id: 'grid', label: 'Töréspontok — sm, md, lg, xl, xxl', anchor: 'grid' },
      { id: 'grid', label: '4 oszlopos rács (col-sm-6 col-md-3)', anchor: 'grid' },
      { id: 'grid', label: '3 oszlopos képgaléria (col-4 col-md-2)', anchor: 'grid' },
      { id: 'grid', label: '2 oszlopos kártya (col-sm-6)', anchor: 'grid' },
    ],
  },
  {
    id: 'typography', icon: '🔤', label: 'Tipográfia',
    searchText: 'fejléc display szöveg szín igazítás lead muted mark del ins strong em h1 h2 h3 h4 h5 h6 piros oblique',
    children: [
      { id: 'typography', label: 'Fejlécek h1–h6 (egyedi színek)', anchor: 'typography' },
      { id: 'typography', label: 'Szövegszínek — text-*', anchor: 'typography' },
      { id: 'typography', label: 'Oldalcím — #oldalcim', anchor: 'typography' },
      { id: 'typography', label: 'Szöveg igazítás — text-align', anchor: 'typography' },
      { id: 'typography', label: 'Piros kiemelés — .piros', anchor: 'typography' },
      { id: 'typography', label: 'Dőlt stílus — oblique', anchor: 'typography' },
    ],
  },
  {
    id: 'components', icon: '🧩', label: 'Komponensek',
    searchText: 'navbar card table alert badge button list-group hero kártya táblázat gomb jelvény lista navigáció',
    children: [
      { id: 'components', label: 'Navbar (navigációs sáv)', anchor: 'components' },
      { id: 'components', label: 'Cards — fejléces, képes kártya', anchor: 'components' },
      { id: 'components', label: 'Tables — table, hover, bordered', anchor: 'components' },
      { id: 'components', label: 'Alerts — info, danger', anchor: 'components' },
      { id: 'components', label: 'Badges — jelvények, státusz', anchor: 'components' },
      { id: 'components', label: 'Buttons — gombok, outline, disabled', anchor: 'components' },
      { id: 'components', label: 'List Groups — lista csoportok', anchor: 'components' },
      { id: 'components', label: 'Hero fejléc — p-5 bg-info', anchor: 'components' },
    ],
  },
  {
    id: 'utilities', icon: '🛠️', label: 'Segédosztályok',
    searchText: 'spacing margin padding display flex float width height background border shadow image img',
    children: [
      { id: 'utilities', label: 'Spacing — p-*, m-*, mb-*, mt-*', anchor: 'utilities' },
      { id: 'utilities', label: 'Display & Position — d-flex, float', anchor: 'utilities' },
      { id: 'utilities', label: 'Background — bg-light, bg-info, ...', anchor: 'utilities' },
      { id: 'utilities', label: 'Images — img-fluid, rounded, w-100', anchor: 'utilities' },
    ],
  },
  {
    id: 'custom-css', icon: '🎨', label: 'Egyedi CSS',
    searchText: 'gradiens árnyék first-letter scrollbar text-indent háttérkép akcio oldalcim fejlec footer shadow',
    children: [
      { id: 'custom-css', label: 'Akciós ár — .akcio', anchor: 'custom-css' },
      { id: 'custom-css', label: 'Fejléc háttérképpel — #fejlec', anchor: 'custom-css' },
      { id: 'custom-css', label: 'Gradiens szöveg', anchor: 'custom-css' },
      { id: 'custom-css', label: 'Oldalháttér gradiens', anchor: 'custom-css' },
      { id: 'custom-css', label: 'Cella háttérszínek — .cellaHatter', anchor: 'custom-css' },
      { id: 'custom-css', label: 'Első betű kiemelése — ::first-letter', anchor: 'custom-css' },
      { id: 'custom-css', label: 'Egyedi lábléc — footer', anchor: 'custom-css' },
      { id: 'custom-css', label: 'Scrollbar — overflow-y', anchor: 'custom-css' },
      { id: 'custom-css', label: 'Bekezdés behúzás — text-indent', anchor: 'custom-css' },
      { id: 'custom-css', label: 'Árnyékolt szöveg — text-shadow', anchor: 'custom-css' },
    ],
  },
];

/* ---- Scroll-spy hook ---- */
function useScrollSpy(ids, offset = 80) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [ids, offset]);
  return active;
}

/* ---- Sub-component: Tree Node ---- */
function TreeNode({ node, activeId, search, expanded, onToggle, onSelect, depth }) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expanded[node.id] ?? false;
  const isActive = activeId === node.id;

  // Auto-expand when searching
  const effectiveExpanded = search ? true : isExpanded;

  const childMatch = (child) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return child.label.toLowerCase().includes(q);
  };

  const visibleChildren = hasChildren && search
    ? node.children.filter(childMatch)
    : node.children || [];

  const anyChildVisible = visibleChildren.length > 0;

  return (
    <div className="tree-node" style={{ paddingLeft: depth * 8 }}>
      {/* Parent row */}
      <div
        className={`tree-row ${isActive ? 'active' : ''}`}
        onClick={() => {
          if (hasChildren && !search) onToggle(node.id);
          onSelect(node.id);
        }}
      >
        {hasChildren && !search && (
          <span className={`tree-arrow ${isExpanded ? 'open' : ''}`}>▸</span>
        )}
        {hasChildren && search && <span className="tree-arrow-spacer" />}
        {!hasChildren && <span className="tree-arrow-spacer" />}
        <span className="tree-icon">{node.icon}</span>
        <span className="tree-label">{node.label}</span>
        {hasChildren && (
          <span className="tree-count">{node.children.length}</span>
        )}
      </div>

      {/* Children */}
      {hasChildren && effectiveExpanded && anyChildVisible && (
        <div className="tree-children">
          {visibleChildren.map((child, i) => (
            <div
              key={`${child.label}-${i}`}
              className="tree-child"
              onClick={() => onSelect(child.anchor || child.id)}
            >
              <span className="tree-child-bullet">•</span>
              <span className="tree-child-label">{child.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function Docs() {
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState(() => {
    const init = {};
    sidebarTree.forEach(n => { init[n.id] = true; });
    return init;
  });
  const contentRef = useRef(null);

  const parentIds = useMemo(() => sidebarTree.map(n => n.id), []);
  const activeId = useScrollSpy(parentIds);

  // ---- Search logic ----
  const searchInTree = useCallback((q) => {
    if (!q) return sidebarTree;
    const lower = q.toLowerCase();
    return sidebarTree.filter(node => {
      const labelMatch = node.label.toLowerCase().includes(lower);
      const textMatch = node.searchText.toLowerCase().includes(lower);
      const childMatch = node.children?.some(c => c.label.toLowerCase().includes(lower));
      return labelMatch || textMatch || childMatch;
    });
  }, []);

  const filteredTree = useMemo(() => searchInTree(search), [search, searchInTree]);

  // Full-content search: scan rendered DOM
  useEffect(() => {
    if (!contentRef.current || !search) return;
    const sections = contentRef.current.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const text = sec.textContent || '';
      const match = text.toLowerCase().includes(search.toLowerCase());
      sec.style.display = match ? '' : 'none';
    });
    // Cleanup on unmount or search clear
    return () => {
      sections.forEach(sec => { sec.style.display = ''; });
    };
  }, [search, filteredTree]);

  const scrollTo = useCallback((id) => {
    setSidebarOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.style.display = ''; // unhide if hidden by search
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const toggleExpand = useCallback((id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  // ---- Content sections ----
  const contentEls = useMemo(() => [
    <OverviewDocs key="overview" />,
    <BootstrapDocs key="bootstrap" />,
    <GridDocs key="grid" />,
    <TypographyDocs key="typography" />,
    <ComponentsDocs key="components" />,
    <UtilitiesDocs key="utilities" />,
    <CustomCSSDocs key="custom-css" />,
  ], []);

  const sectionMap = useMemo(() => {
    const m = {};
    sidebarTree.forEach((s, i) => { m[s.id] = contentEls[i]; });
    return m;
  }, [contentEls]);

  // ---- Expand all / collapse all ----
  const expandAll = () => {
    const all = {};
    sidebarTree.forEach(n => { all[n.id] = true; });
    setExpanded(all);
  };
  const collapseAll = () => {
    const all = {};
    sidebarTree.forEach(n => { all[n.id] = false; });
    setExpanded(all);
  };

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

        {/* Search */}
        <div className="sidebar-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Keresés (pl. grid, navbar, modal)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && <button className="search-clear" onClick={() => setSearch('')}>✕</button>}
        </div>

        {/* Expand/collapse controls */}
        {!search && (
          <div className="sidebar-controls">
            <button onClick={expandAll} title="Összes kinyitása">＋ Összes</button>
            <button onClick={collapseAll} title="Összes becsukása">－ Becsuk</button>
          </div>
        )}

        {/* Tree nav */}
        <nav className="sidebar-nav">
          {filteredTree.map(node => (
            <TreeNode
              key={node.id}
              node={node}
              activeId={activeId}
              search={search}
              expanded={expanded}
              onToggle={toggleExpand}
              onSelect={scrollTo}
              depth={0}
            />
          ))}
          {filteredTree.length === 0 && (
            <div className="no-results">
              <p>🔍 Nincs találat</p>
              <small>Próbálj más kulcsszavakat</small>
            </div>
          )}
        </nav>

        {/* Search stats */}
        {search && (
          <div className="sidebar-search-info">
            <small>{filteredTree.length} szekció találat</small>
          </div>
        )}

        <div className="sidebar-footer">
          <small>Bun · React · Vite · Bootstrap 5.3</small>
        </div>
      </aside>

      {/* ---- Mobile ---- */}
      <header className="docs-mobile-header">
        <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '✕' : '☰'}
        </button>
        <span className="mobile-brand">📚 Bootstrap 5 + CSS Docs</span>
      </header>

      {/* ---- Main ---- */}
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

        <div className="docs-content" ref={contentRef}>
          {sidebarTree.map(s => (
            <div key={s.id}>
              {sectionMap[s.id]}
            </div>
          ))}
        </div>

        <footer className="docs-footer">
          <p>Bootstrap 5 + CSS Docs — Bun + React + Vite</p>
        </footer>
      </main>
    </div>
  );
}
