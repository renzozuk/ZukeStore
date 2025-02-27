import { useParams } from "react-router-dom";
import "./Detail.css";
import Freight from "../components/Freight";
import { loadProductById, getPrototypeProduct } from "../util/Data";
import { useEffect, useState } from "react";

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
    });

    return (
        <div className="outer-product-detail">
            {product === null ? 
            <p className="loading-label">Carregando</p> :
            <div className="product-detail">
                <img className="product-detail-image" src={product.image}></img>
                <p className="product-detail-name">{product.name}</p>
                <p className="product-detail-description">{product.description}</p>
                <p className="product-detail-price">{`${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</p>
            </div>}
            <Freight />
        </div>
    );
}