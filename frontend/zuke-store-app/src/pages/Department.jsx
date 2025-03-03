import "./Department.css";
import Product from "../components/Product";
import { loadProducts } from "../util/Data";
import { useEffect, useState } from "react";

const Department = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        loadProducts().then((productsList) => {
            setProducts(productsList);
        }).catch((e) => console.log(e));
    });

    return (
        <div className="products">
            { products.length != 0 ?
            products.map((product) => (
                <Product id={product.id} image={product.image} name={product.name} description={product.description} price={product.price} />
            )) :
            <>
                <Product id={`prototype`} image="https://images.pexels.com/photos/2815377/pexels-photo-2815377.jpeg" name="Ursinho de Pelúcia" description="Feito com materiais macios e de alta qualidade, ele é incrivelmente fofo ao toque, ideal para abraços aconchegantes." price={49.99} />
                <Product id={`prototype`} image="https://images.pexels.com/photos/10160241/pexels-photo-10160241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Globo Terrestre" description="O globo terrestre é uma representação tridimensional do planeta Terra, que ilustra de forma precisa a sua forma esférica e suas características geográficas." price={124.99} />
                <Product id={`prototype`} image="https://images.pexels.com/photos/296158/pexels-photo-296158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Sapatos" description="Este par de sapatos é muito mais do que um simples acessório; é uma expressão de estilo, conforto e funcionalidade." price={399.99} />
                <Product id={`prototype`} image="https://images.pexels.com/photos/683624/pexels-photo-683624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Despertador" description="Perfeito para despertar no início da manhã e não perder a hora de ir ao trabalho. Diferentes sons ou músicas podem ser usados para o despertador." price={55.9} />
                <Product id={`prototype`} image="https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Violão" description="Um instrumento musical de cordas, feito de madeira, com uma caixa de ressonância e braço longo. Suas seis cordas são tocadas com os dedos ou palheta, produzindo sons ricos e harmônicos." price={299.99} />
                <Product id={`prototype`} image="https://images.pexels.com/photos/2228889/pexels-photo-2228889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Xícara" description="Perfeita para tomar um bom café no início da manhã ou no lanche da tarde." price={19.99} />
                <Product id={`prototype`} image="https://images.pexels.com/photos/42257/flowerful-flowery-flowerly-42257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Vaso" description="Perfeito para colocar lindas flores dentro e decorar o ambiente, afim de deixá-lo mais agradável." price={14.99} />
                <Product id={`prototype`} image="https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Chapéu" description="Ideal para se proteger do sol em um dia ensolarado, além de disfarçar as falhas da calvície." price={4999.99} />
            </>
            }
        </div>
    );
};

export default Department;