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
          <Product image="https://images.pexels.com/photos/2815377/pexels-photo-2815377.jpeg" name="Ursinho de Pelúcia" description="Este adorável ursinho de pelúcia é o companheiro perfeito para todas as horas. Feito com materiais macios e de alta qualidade, ele é incrivelmente fofo ao toque, ideal para abraços aconchegantes. Além de ser um brinquedo, o ursinho de pelúcia também desempenha um papel importante no desenvolvimento emocional das crianças, ajudando-as a lidar com sentimentos e a criar laços de empatia." price={49.99} />
          <Product image="https://images.pexels.com/photos/10160241/pexels-photo-10160241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Globo Terrestre" description="O globo terrestre é uma representação tridimensional do planeta Terra, que ilustra de forma precisa a sua forma esférica e as características geográficas. A superfície do globo é coberta por mapas que mostram continentes, oceanos, montanhas, rios e limites políticos. As cores vibrantes e os detalhes topográficos ajudam a destacar a diversidade geográfica do planeta, além de representar fielmente o tamanho e a forma dos países." price="124.99" />
          <Product image="https://images.pexels.com/photos/296158/pexels-photo-296158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Sapatos" description="Este par de sapatos é muito mais do que um simples acessório; é uma expressão de estilo, conforto e funcionalidade. Seja para um dia de trabalho, uma festa ou uma caminhada no parque, um bom par de sapatos é essencial, proporcionando não apenas estilo, mas também conforto e confiança a cada passo." price="399.99" />
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