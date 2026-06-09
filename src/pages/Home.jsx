import { products } from '../data/products';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Alert from '../components/Alert';
import ProductCard from '../components/ProductCard';
import ComparisonTable from '../components/ComparisonTable';
import Distributors from '../components/Distributors';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container bg-light app-container py-2">
      {/* Navigáció */}
      <div className="row">
        <Navbar />
      </div>

      {/* Hero / Fejléc */}
      <div className="row">
        <Hero />
      </div>

      {/* Alert / Kupon */}
      <div className="row">
        <Alert />
      </div>

      {/* Napi ajánlataink */}
      <div className="row" id="napi_ajanlataink">
        <div className="col-sm-12">
          <h3>Napi ajánlataink</h3>
        </div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Összehasonlítás */}
      <div className="row" id="osszehasonlitas">
        <ComparisonTable />
      </div>

      {/* Forgalmazóink */}
      <div className="row" id="forgalmazoink">
        <Distributors />
      </div>

      {/* Kapcsolat */}
      <div className="row" id="kapcsolat">
        <Contact />
      </div>

      {/* Lábléc */}
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}
