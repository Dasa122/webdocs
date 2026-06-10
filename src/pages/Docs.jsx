import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import OverviewDocs from './docs/OverviewDocs';
import GridDocs from './docs/GridDocs';
import NavDocs from './docs/NavDocs';
import ListDocs from './docs/ListDocs';
import TableDocs from './docs/TableDocs';
import ImageDocs from './docs/ImageDocs';
import JumboDocs from './docs/JumboDocs';
import FloatDocs from './docs/FloatDocs';
import CustomCSSDocs from './docs/CustomCSSDocs';
import PythonDocs from './docs/PythonDocs';
import PacketTracerDocs from './docs/PacketTracerDocs';

/* ============================================================
   ONLY patterns from: cinko/001_jegyzet/index.html + egyeni.css
   ============================================================ */
const sidebarTree = [
  {
    id: 'overview', icon: '📋', label: 'Áttekintés',
    searchText: 'html doctype meta charset viewport title link css js bootstrap',
    children: [
      { id: 'overview', label: 'HTML5 alapszerkezet', anchor: 'overview' },
      { id: 'overview', label: 'meta, link, script betöltés', anchor: 'overview' },
    ],
  },
  {
    id: 'grid', icon: '📐', label: 'Grid & Konténer',
    searchText: 'container row col-sm col-md col-lg cella',
    children: [
      { id: 'grid', label: '.container — középre zárt tartalom', anchor: 'grid' },
      { id: 'grid', label: '.row + .col-sm-12 — teljes sor', anchor: 'grid' },
      { id: 'grid', label: 'col-sm-8 col-md-6 col-lg-2 — reszponzív', anchor: 'grid' },
      { id: 'grid', label: 'col-sm-4 col-md-3 — képgaléria', anchor: 'grid' },
    ],
  },
  {
    id: 'nav', icon: '🔗', label: 'Navigáció (Navbar)',
    searchText: 'navbar navbar-expand-sm bg-light navbar-nav nav-item nav-link',
    children: [
      { id: 'nav', label: 'navbar + navbar-expand-sm', anchor: 'nav' },
      { id: 'nav', label: 'navbar-nav, nav-item, nav-link', anchor: 'nav' },
      { id: 'nav', label: 'Horgony linkek (#menupont)', anchor: 'nav' },
    ],
  },
  {
    id: 'jumbo', icon: '🎯', label: 'Fejléc (Jumbotron)',
    searchText: 'mt-4 p-5 bg-warning text-white rounded h1',
    children: [
      { id: 'jumbo', label: 'mt-4 + p-5 + bg-warning + text-white + rounded', anchor: 'jumbo' },
      { id: 'jumbo', label: 'h1 címsor + p alcím', anchor: 'jumbo' },
    ],
  },
  {
    id: 'lists', icon: '📋', label: 'Listák',
    searchText: 'list-group list-group-item list-group-numbered ul ol li',
    children: [
      { id: 'lists', label: 'Rendezetlen lista — ul.list-group', anchor: 'lists' },
      { id: 'lists', label: 'Rendezett lista — ol.list-group-numbered', anchor: 'lists' },
      { id: 'lists', label: 'Félkövér listaelem — b tag', anchor: 'lists' },
    ],
  },
  {
    id: 'table', icon: '📊', label: 'Táblázat',
    searchText: 'table table-bordered table-hover th tr td',
    children: [
      { id: 'table', label: 'table + table-bordered + table-hover', anchor: 'table' },
      { id: 'table', label: 'th fejléc sor + td adat sorok', anchor: 'table' },
    ],
  },
  {
    id: 'images', icon: '🖼️', label: 'Képek',
    searchText: 'img-fluid w-100 img src alt title',
    children: [
      { id: 'images', label: 'img-fluid — reszponzív kép', anchor: 'images' },
      { id: 'images', label: 'w-100 — teljes szélesség', anchor: 'images' },
      { id: 'images', label: 'alt + title attribútumok', anchor: 'images' },
    ],
  },
  {
    id: 'float', icon: '↔️', label: 'Lebegtetés & Lábléc',
    searchText: 'float-start float-end clearfix',
    children: [
      { id: 'float', label: 'float-start / float-end', anchor: 'float' },
      { id: 'float', label: 'clearfix — úsztatás törlése', anchor: 'float' },
      { id: 'float', label: 'b + i — félkövér, dőlt', anchor: 'float' },
    ],
  },
  {
    id: 'custom-css', icon: '🎨', label: 'Egyedi CSS',
    searchText: 'cellaHatter felkoverSzoveg egyszerVagyok h1 background-image scroll',
    children: [
      { id: 'custom-css', label: 'h1 — lila fejlécszín', anchor: 'custom-css' },
      { id: 'custom-css', label: '.cellaHatter — bézs háttér', anchor: 'custom-css' },
      { id: 'custom-css', label: '.felkoverSzoveg — félkövér', anchor: 'custom-css' },
      { id: 'custom-css', label: '#egyszerVagyok — sötétpiros nagy', anchor: 'custom-css' },
      { id: 'custom-css', label: 'body — háttérkép (repeat, fixed)', anchor: 'custom-css' },
      { id: 'custom-css', label: 'html — overflow-y: scroll', anchor: 'custom-css' },
    ],
  },
];

const pythonTree = [
  {
    id: 'python-basics', icon: '🐍', label: 'Alapok — Input, Számolás, Feltétel',
    searchText: 'input print int float f-string if else and or osztas atlag',
    children: [
      { id: 'python-basics', label: 'input() — felhasználói adatbekérés', anchor: 'python-basics' },
      { id: 'python-basics', label: 'int(), float() — típuskonverzió', anchor: 'python-basics' },
      { id: 'python-basics', label: 'f-string — formázott kiíratás', anchor: 'python-basics' },
      { id: 'python-basics', label: 'if/else — feltételes elágazás', anchor: 'python-basics' },
    ],
  },
  {
    id: 'python-lists', icon: '📋', label: 'Listák és Keresés',
    searchText: 'lista for in len return input in operator tagsag',
    children: [
      { id: 'python-lists', label: 'Lista definíció és bejárás', anchor: 'python-lists' },
      { id: 'python-lists', label: 'in operátor — tagság vizsgálata', anchor: 'python-lists' },
      { id: 'python-lists', label: 'len() — leghosszabb elem keresése', anchor: 'python-lists' },
    ],
  },
  {
    id: 'python-classes', icon: '🏗️', label: 'Osztályok és Adatszerkezetek',
    searchText: 'class init self str objektum open file csv strip split readline with',
    children: [
      { id: 'python-classes', label: 'class + __init__ — osztály definíció', anchor: 'python-classes' },
      { id: 'python-classes', label: 'Fájl beolvasás — open(), with, split()', anchor: 'python-classes' },
      { id: 'python-classes', label: 'Objektum lista feldolgozása', anchor: 'python-classes' },
    ],
  },
  {
    id: 'python-dicts', icon: '📖', label: 'Szótárak (Dictionary)',
    searchText: 'dict dictionary szotar kulcs ertek items keys values get setdefault max min sorted',
    children: [
      { id: 'python-dicts', label: 'Létrehozás, értékadás, lekérdezés', anchor: 'python-dicts' },
      { id: 'python-dicts', label: 'Bejárás — keys(), values(), items()', anchor: 'python-dicts' },
      { id: 'python-dicts', label: 'Összesítés (számlálás / gyűjtés)', anchor: 'python-dicts' },
      { id: 'python-dicts', label: 'max / min kulcs alapján', anchor: 'python-dicts' },
      { id: 'python-dicts', label: 'Egyedi elemek — set() alternatíva', anchor: 'python-dicts' },
    ],
  },
  {
    id: 'python-summary', icon: '📝', label: 'Összefoglaló',
    searchText: 'tematika osszefoglalo tablazat linkek',
    children: [
      { id: 'python-summary', label: 'Témakörök áttekintő táblázata', anchor: 'python-summary' },
      { id: 'python-summary', label: 'Hasznos linkek', anchor: 'python-summary' },
    ],
  },
];

const packetTracerTree = [
  {
    id: 'pt-basic', icon: '🔧', label: 'Alapvető beállítások',
    searchText: 'hostname enable secret password banner line console vty running-config startup-config',
    children: [
      { id: 'pt-basic', label: 'EXEC módok — user, privileged, config', anchor: 'pt-basic' },
      { id: 'pt-basic', label: 'Hostname, jelszavak, titkosítás', anchor: 'pt-basic' },
      { id: 'pt-basic', label: 'Konfiguráció mentése (copy, write)', anchor: 'pt-basic' },
    ],
  },
  {
    id: 'pt-interfaces', icon: '🌐', label: 'Interfészek és IP-címzés',
    searchText: 'interface ip address no shutdown gigabit serial clock rate svi',
    children: [
      { id: 'pt-interfaces', label: 'Router interfész + IP-cím', anchor: 'pt-interfaces' },
      { id: 'pt-interfaces', label: 'Serial + clock rate (DCE)', anchor: 'pt-interfaces' },
      { id: 'pt-interfaces', label: 'Switch SVI + default-gateway', anchor: 'pt-interfaces' },
      { id: 'pt-interfaces', label: 'show ip interface brief', anchor: 'pt-interfaces' },
    ],
  },
  {
    id: 'pt-routing', icon: '🗺️', label: 'Forgalomirányítás (Routing)',
    searchText: 'ip route static ospf network area router-id wildcard mask passive-interface',
    children: [
      { id: 'pt-routing', label: 'Statikus route + default route', anchor: 'pt-routing' },
      { id: 'pt-routing', label: 'OSPF konfiguráció', anchor: 'pt-routing' },
      { id: 'pt-routing', label: 'Wildcard mask referencia', anchor: 'pt-routing' },
    ],
  },
  {
    id: 'pt-switching', icon: '🔀', label: 'Switching és VLAN-ok',
    searchText: 'vlan switchport mode access trunk dot1Q encapsulation native router-on-a-stick',
    children: [
      { id: 'pt-switching', label: 'VLAN létrehozás + port hozzárendelés', anchor: 'pt-switching' },
      { id: 'pt-switching', label: 'Trunk port + allowed VLAN', anchor: 'pt-switching' },
      { id: 'pt-switching', label: 'Router-on-a-Stick (subinterface)', anchor: 'pt-switching' },
    ],
  },
  {
    id: 'pt-security', icon: '🔒', label: 'SSH, ACL, Port Security',
    searchText: 'ssh crypto key rsa access-list permit deny port-security mac-address sticky violation',
    children: [
      { id: 'pt-security', label: 'SSH konfiguráció', anchor: 'pt-security' },
      { id: 'pt-security', label: 'Standard + Extended ACL', anchor: 'pt-security' },
      { id: 'pt-security', label: 'Port Security (MAC szűrés)', anchor: 'pt-security' },
    ],
  },
  {
    id: 'pt-services', icon: '⚙️', label: 'DHCP, NAT, NTP',
    searchText: 'dhcp pool excluded-address nat inside outside overload pat',
    children: [
      { id: 'pt-services', label: 'DHCP szerver routeren', anchor: 'pt-services' },
      { id: 'pt-services', label: 'Statikus + Dinamikus NAT/PAT', anchor: 'pt-services' },
    ],
  },
  {
    id: 'pt-cdp', icon: '🔍', label: 'Hibakeresés és Diagnosztika',
    searchText: 'ping traceroute cdp lldp neighbors arp mac address-table debug',
    children: [
      { id: 'pt-cdp', label: 'Ping, traceroute, telnet', anchor: 'pt-cdp' },
      { id: 'pt-cdp', label: 'CDP + LLDP szomszédok', anchor: 'pt-cdp' },
      { id: 'pt-cdp', label: 'ARP + MAC-cím tábla', anchor: 'pt-cdp' },
    ],
  },
  {
    id: 'pt-reference', icon: '📋', label: 'Gyorsreferencia — Show parancsok',
    searchText: 'show running-config startup-config version ip route vlan access-lists',
    children: [
      { id: 'pt-reference', label: 'Top 20 show parancs', anchor: 'pt-reference' },
      { id: 'pt-reference', label: 'Hasznos linkek', anchor: 'pt-reference' },
    ],
  },
];

/* ---- Scroll-spy ---- */
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

/* ---- Tree Node ---- */
function TreeNode({ node, activeId, search, expanded, onToggle, onSelect, depth }) {
  const hasChildren = node.children?.length > 0;
  const isExpanded = expanded[node.id] ?? false;
  const effectiveExpanded = search ? true : isExpanded;
  const isActive = activeId === node.id;

  const visibleChildren = search
    ? (node.children || []).filter(c => c.label.toLowerCase().includes(search.toLowerCase()))
    : (node.children || []);

  return (
    <div className="tree-node" style={{ paddingLeft: depth * 8 }}>
      <div
        className={`tree-row ${isActive ? 'active' : ''}`}
        onClick={() => {
          if (hasChildren && !search) onToggle(node.id);
          onSelect(node.id);
        }}
      >
        {hasChildren && !search && <span className={`tree-arrow ${isExpanded ? 'open' : ''}`}>▸</span>}
        {hasChildren && search && <span className="tree-arrow-spacer" />}
        {!hasChildren && <span className="tree-arrow-spacer" />}
        <span className="tree-icon">{node.icon}</span>
        <span className="tree-label">{node.label}</span>
        {hasChildren && <span className="tree-count">{node.children.length}</span>}
      </div>
      {hasChildren && effectiveExpanded && visibleChildren.length > 0 && (
        <div className="tree-children">
          {visibleChildren.map((child, i) => (
            <div key={`${child.label}-${i}`} className="tree-child" onClick={() => onSelect(child.anchor)}>
              <span className="tree-child-bullet">•</span>
              <span className="tree-child-label">{child.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================ */
export default function Docs() {
  const [mode, setMode] = useState('bootstrap'); // 'bootstrap' | 'python'
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState(() => {
    const init = {};
    sidebarTree.forEach(n => { init[n.id] = true; });
    return init;
  });
  const currentTree = mode === 'python' ? pythonTree : mode === 'packet-tracer' ? packetTracerTree : sidebarTree;

  const contentRef = useRef(null);
  const parentIds = useMemo(() => currentTree.map(n => n.id), [currentTree]);
  const activeId = useScrollSpy(parentIds);

  // Filter tree
  const filteredTree = useMemo(() => {
    if (!search) return currentTree;
    const q = search.toLowerCase();
    return currentTree.filter(n =>
      n.label.toLowerCase().includes(q) ||
      n.searchText.toLowerCase().includes(q) ||
      (n.children || []).some(c => c.label.toLowerCase().includes(q))
    );
  }, [search, currentTree]);

  // Full-content search in DOM
  useEffect(() => {
    if (!contentRef.current || !search) return;
    const sections = contentRef.current.querySelectorAll('section[id]');
    sections.forEach(sec => {
      sec.style.display = sec.textContent.toLowerCase().includes(search.toLowerCase()) ? '' : 'none';
    });
    return () => { sections.forEach(sec => { sec.style.display = ''; }); };
  }, [search, filteredTree]);

  const scrollTo = useCallback((id) => {
    setSidebarOpen(false);
    const el = document.getElementById(id);
    if (el) { el.style.display = ''; el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }, []);

  const toggleExpand = useCallback((id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const expandAll = () => { const a = {}; currentTree.forEach(n => { a[n.id] = true; }); setExpanded(a); };
  const collapseAll = () => { const a = {}; currentTree.forEach(n => { a[n.id] = false; }); setExpanded(a); };

  const switchMode = (newMode) => {
    setMode(newMode);
    setSearch('');
    setSidebarOpen(false);
    const a = {};
    const tree = newMode === 'python' ? pythonTree : newMode === 'packet-tracer' ? packetTracerTree : sidebarTree;
    tree.forEach(n => { a[n.id] = true; });
    setExpanded(a);
  };

  const bootstrapContent = useMemo(() => [
    <OverviewDocs key="overview" />,
    <GridDocs key="grid" />,
    <NavDocs key="nav" />,
    <JumboDocs key="jumbo" />,
    <ListDocs key="lists" />,
    <TableDocs key="table" />,
    <ImageDocs key="images" />,
    <FloatDocs key="float" />,
    <CustomCSSDocs key="custom-css" />,
  ], []);

  const pythonContent = useMemo(() => [
    <PythonDocs key="python" />,
  ], []);

  const packetTracerContent = useMemo(() => [
    <PacketTracerDocs key="packet-tracer" />,
  ], []);

  const contentEls = mode === 'python' ? pythonContent : mode === 'packet-tracer' ? packetTracerContent : bootstrapContent;

  const sectionMap = useMemo(() => {
    const m = {};
    currentTree.forEach((s, i) => { m[s.id] = contentEls[i]; });
    return m;
  }, [contentEls, currentTree]);

  return (
    <div className="docs-layout">
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      <aside className={`docs-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <span className="brand-icon">{mode === 'python' ? '🐍' : mode === 'packet-tracer' ? '🔧' : '📚'}</span>
          <div><strong>{mode === 'python' ? 'Python' : mode === 'packet-tracer' ? 'Packet Tracer' : 'Bootstrap 5'}</strong><small>{mode === 'python' ? ' Alapok' : mode === 'packet-tracer' ? ' IOS' : '+ CSS Docs'}</small></div>
        </div>
        <div className="sidebar-mode-switch">
          <button
            className={`mode-btn ${mode === 'bootstrap' ? 'active' : ''}`}
            onClick={() => switchMode('bootstrap')}
          >
            🎨 Bootstrap
          </button>
          <button
            className={`mode-btn ${mode === 'python' ? 'active' : ''}`}
            onClick={() => switchMode('python')}
          >
            🐍 Python
          </button>
          <button
            className={`mode-btn ${mode === 'packet-tracer' ? 'active' : ''}`}
            onClick={() => switchMode('packet-tracer')}
          >
            🔧 Packet Tracer
          </button>
        </div>
        <div className="sidebar-search">
          <span className="search-icon">🔍</span>
          <input type="text" className="search-input" placeholder="Keresés..." value={search} onChange={e => setSearch(e.target.value)} />
          {search && <button className="search-clear" onClick={() => setSearch('')}>✕</button>}
        </div>
        {!search && (
          <div className="sidebar-controls">
            <button onClick={expandAll}>＋ Összes</button>
            <button onClick={collapseAll}>－ Becsuk</button>
          </div>
        )}
        <nav className="sidebar-nav">
          {filteredTree.map(node => (
            <TreeNode key={node.id} node={node} activeId={activeId} search={search} expanded={expanded} onToggle={toggleExpand} onSelect={scrollTo} depth={0} />
          ))}
          {filteredTree.length === 0 && <div className="no-results"><p>🔍 Nincs találat</p></div>}
        </nav>
        {search && <div className="sidebar-search-info"><small>{filteredTree.length} szekció</small></div>}
        <div className="sidebar-footer"><small>Bun · React · Vite · Bootstrap 5.3</small></div>
      </aside>

      <header className="docs-mobile-header">
        <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? '✕' : '☰'}</button>
        <span className="mobile-brand">{mode === 'python' ? '🐍 Python Alapok' : mode === 'packet-tracer' ? '🔧 Packet Tracer IOS' : '📚 Bootstrap 5 + CSS Docs'}</span>
      </header>

      <main className="docs-main">
        <div className="docs-hero">
          {mode === 'bootstrap' ? (
            <>
              <h1>Bootstrap 5 + CSS Dokumentáció</h1>
              <p>Az index.html és egyeni.css fájlban használt összes minta — kódpéldákkal, élő előnézetekkel.</p>
              <div className="hero-badges">
                <span className="badge bg-primary">Bootstrap 5.3</span>
                <span className="badge bg-secondary">HTML5</span>
                <span className="badge bg-success">CSS3</span>
              </div>
            </>
          ) : mode === 'python' ? (
            <>
              <h1>🐍 Python Alapok Dokumentáció</h1>
              <p>Input, listák, osztályok, fájlkezelés — Python programozási alapok gyakorlati példákkal.</p>
              <div className="hero-badges">
                <span className="badge bg-primary">Python 3</span>
                <span className="badge bg-warning text-dark">Fájlkezelés</span>
                <span className="badge bg-success">OOP</span>
              </div>
            </>
          ) : (
            <>
              <h1>🔧 Packet Tracer IOS Dokumentáció</h1>
              <p>Cisco IOS parancsok és konfigurációs minták — router, switch, VLAN, OSPF, ACL, NAT és több.</p>
              <div className="hero-badges">
                <span className="badge bg-primary">Cisco IOS</span>
                <span className="badge bg-warning text-dark">CCNA</span>
                <span className="badge bg-success">Packet Tracer</span>
              </div>
            </>
          )}
        </div>
        <div className="docs-content" ref={contentRef}>
          {currentTree.map(s => <div key={s.id}>{sectionMap[s.id]}</div>)}
        </div>
        <footer className="docs-footer"><p>{mode === 'python' ? 'Python Alapok' : mode === 'packet-tracer' ? 'Packet Tracer IOS' : 'Bootstrap 5 + CSS Docs'} — Bun + React + Vite</p></footer>
      </main>
    </div>
  );
}
