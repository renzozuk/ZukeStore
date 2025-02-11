import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Freight from "./components/Freight.jsx";
import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";

export default function App() {

  const [showFreight, setShowFreight] = useState(false);

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="products">
          <Product image="https://images.pexels.com/photos/2815377/pexels-photo-2815377.jpeg" name="Ursinho de Pelúcia" description="Este adorável ursinho de pelúcia é o companheiro perfeito para todas as horas. Feito com materiais macios e de alta qualidade, ele é incrivelmente fofo ao toque, ideal para abraços aconchegantes." price={49.99} />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="freight-space">
          {!showFreight && <button className="show-freight-button" onClick={() => setShowFreight(true)}>Calcular Frete</button>}
          {showFreight && <Freight setShowFreight={setShowFreight} />}
        </div>
      </div>
      <Footer />
    </>
  );
}