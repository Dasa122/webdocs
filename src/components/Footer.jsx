import { siteInfo } from '../data/products';

export default function Footer() {
  return (
    <div className="col-sm-12 mb-3 footer-badges">
      <p>
        <span className="badge bg-info float-start me-2">{siteInfo.author}</span>
        <span className="badge bg-info float-start me-2">{siteInfo.class}</span>
        <span className="badge bg-info float-end">{siteInfo.date}</span>
      </p>
    </div>
  );
}
