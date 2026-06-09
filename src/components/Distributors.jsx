import { distributors } from '../data/products';

export default function Distributors() {
  return (
    <div className="col-sm-12 mb-3">
      <h3>Forgalmazóink</h3>
      <ul className="list-group">
        {distributors.map((d) => (
          <li className="list-group-item" key={d.name}>
            {d.name} (
            <a href={d.url} target="_blank" rel="noopener noreferrer">
              {d.name}
            </a>
            )
          </li>
        ))}
      </ul>
    </div>
  );
}
