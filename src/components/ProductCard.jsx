export default function ProductCard({ product }) {
  return (
    <div className="col-sm-6 col-md-3 mb-3">
      <div className="product-card">
        <h3 className={product.color}>{product.brand}</h3>
        <img
          src={`/images/${product.image}`}
          className="img-fluid rounded"
          alt={product.brand}
        />
        <p className="akcio mt-2">{product.price}</p>
      </div>
    </div>
  );
}
