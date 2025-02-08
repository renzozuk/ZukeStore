import './Product.css'

export default function Product(props) {
    return (
        <div className="product">
            <img className="product-image" src={props.image || `https://placehold.jp/40/e22e2d/ffffff/275x275.png?text=no+photo`}></img>
            <div className="product-attributions">
                <p className="product-name">{props.name}</p>
                <p className="product-description">{props.description}</p>
                <p className="product-price">{`$${props.price || `0.00`}`}</p>
                <div className="product-buttons">
                    <button className="product-button product-buy-button">Comprar</button>
                    <button className="product-button product-detail-button">Detalhes</button>
                </div>
            </div>
        </div>
    );
}