import { appleDetail, siteInfo } from '../data/products';

export default function AppleDetail() {
  return (
    <div className="container bg-light app-container py-2">
      {/* Navigáció */}
      <div className="row">
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
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    ← Vissza a Kezdőlapra
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero */}
      <div className="row">
        <div className="col-sm-12 mb-3">
          <div className="p-5 hero-section">
            <h1 id="oldalcim">{siteInfo.title}</h1>
            <h2>{siteInfo.subtitle}</h2>
          </div>
        </div>
      </div>

      {/* Termék adatok */}
      <div className="row mb-3">
        <div className="col-12">
          <h4>{appleDetail.model}</h4>
        </div>
        {appleDetail.specs.map((spec, i) => (
          <div className="col-3" key={i}>
            <h5 className="text-muted">{spec.label}</h5>
          </div>
        ))}
      </div>

      {/* Képek */}
      <div className="row mb-4">
        {appleDetail.images.map((img, i) => (
          <div className="col-3" key={i}>
            <img
              src={`/images/${img.src}`}
              alt={img.alt}
              title={img.title}
              className="img-fluid rounded shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
