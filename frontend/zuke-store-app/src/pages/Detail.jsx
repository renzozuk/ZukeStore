import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductContainer.css";
import Freight from "../components/Freight";
import { loadProductById, getPrototypeProduct } from "../util/Data";

export default function Detail() {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productId === `prototype`) {
            setProduct(getPrototypeProduct());
        } else {
            loadProductById(productId).then((result) => {
                setProduct(result);
            })
        }
    }, [productId]);

    return (
        <div className="outer-contents outer-product-detail">
            {product === null ? 
            <p className="loading-label">Carregando...</p> :
            <div className="product-container product-detail">
                <div className="outer-product-container-image outer-product-detail-image">
                    <img className="product-container-image product-detail-image" src={product.image}></img>
                </div>
                <p className="product-container-name product-detail-name">{product.name}</p>
                <p className="product-container-description product-detail-description">{product.description}</p>
                <p className="product-container-price product-detail-price">{`${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</p>
            </div>}
            <Freight />
        </div>
    );
}