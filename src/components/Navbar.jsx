import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Kezdőlap', href: '/' },
  { label: 'Napi ajánlataink', href: '/#napi_ajanlataink' },
  { label: 'Összehasonlítás', href: '/#osszehasonlitas' },
  { label: 'Forgalmazóink', href: '/#forgalmazoink' },
  { label: 'Kapcsolat', href: '/#kapcsolat' },
];

export default function Navbar() {
  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li className="nav-item" key={item.label}>
                {item.href.startsWith('/#') ? (
                  <a
                    className="nav-link"
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link className="nav-link" to={item.href}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
