import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function ComparisonTable() {
  return (
    <div className="col-sm-12 mb-3">
      <h3>Összehasonlítás</h3>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Név</th>
              <th>Processzor típusa</th>
              <th>Processzor órajel</th>
              <th>Memória mérete</th>
              <th>Memória típusa</th>
              <th>Részletek</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.model}</td>
                <td>{p.cpu}</td>
                <td>{p.cpuClock}</td>
                <td>{p.ram}</td>
                <td>{p.ramType}</td>
                <td>
                  {p.link ? (
                    <Link to={p.link} className="btn btn-outline-info btn-sm">
                      Leírás
                    </Link>
                  ) : (
                    <button className="btn btn-outline-info btn-sm" disabled>
                      Leírás
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
