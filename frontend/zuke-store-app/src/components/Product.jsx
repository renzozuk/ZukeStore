import "./Product.scss";
import styles from "../PrimaryStyles.module.scss";
import { Link } from "react-router-dom";

export default function Product(props) {

    const price = parseFloat(props.price) || 0.00;
    const maxLength = 115;

    return (
        <div className="product">
            <div className="product-upper-information">
                <img className="product-image" src={props.image || `https://placehold.jp/40/${styles.primaryColor.replace("#", "")}/${styles.lightColor.replace("#", "")}/275x275.png?text=no+photo`}></img>
                <p className="product-name">{props.name}</p>
            </div>
            <div className="product-middle-information">
                <p className="product-description">{props.description.length > maxLength ? `${props.description.substring(0, maxLength)}...` : props.description}</p>
            </div>
            <div className="product-lower-information">
                <p className="product-price">{`${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</p>
                <div className="product-buttons">
                    <button className="product-button product-buy-button"><Link className="product-button-link" to={`/payment/${props.id}`}>Comprar</Link></button>
                    <button className="product-button product-detail-button"><Link className="product-button-link" to={`/detail/${props.id}`}>Detalhes</Link></button>
                </div>
            </div>
        </div>
    );
}