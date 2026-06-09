import { siteInfo } from '../data/products';

export default function Alert() {
  return (
    <div className="col-sm-12 mb-3">
      <div className="alert alert-info" role="alert">
        <b>{siteInfo.alertText.split('!')[0]}!</b>
        {siteInfo.alertText.slice(siteInfo.alertText.indexOf('!') + 1)}
      </div>
    </div>
  );
}
