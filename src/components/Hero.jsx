import { siteInfo } from '../data/products';

export default function Hero() {
  return (
    <div className="col-sm-12 mb-3">
      <div className="p-5 hero-section">
        <h1 id="oldalcim">{siteInfo.title}</h1>
        <h2>{siteInfo.subtitle}</h2>
      </div>
    </div>
  );
}
