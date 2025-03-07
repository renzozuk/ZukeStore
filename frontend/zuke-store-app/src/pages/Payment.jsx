import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Payment.css";
import "./ProductContainer.css";
import { loadProductById, getPrototypeProduct } from "../util/Data";
import { isValid, isVisa, isMasterCard, isAmericanExpress, isDiscover } from "../util/Validators";
import { IMaskInput } from "react-imask";

export default function Payment() {

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    const [cardOwnerName, setCardOwnerName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryMonth, setExpiryMonth] = useState(currentMonth);
    const [expiryYear, setExpiryYear] = useState(currentYear);
    const [cvc, setCvc] = useState("");

    const monthOptions = Array.from({ length: parseInt(expiryYear) === currentYear ? 12 - currentMonth + 1 : 12 }, (_, index) => parseInt(expiryYear) === currentYear ? index + currentMonth : index + 1);
    const yearOptions = Array.from({ length: 2050 - currentYear + 1 }, (_, index) => currentYear + index);

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
        <div className="outer-contents outer-payment">
            {product === null ? 
            <p className="loading-label">Carregando...</p> : 
            <div className="product-container product-payment">
                <div className="outer-product-container-image outer-product-payment-image">
                    <img className="product-container-image product-payment-image" src={product.image}></img>
                </div>
                <p className="product-container-name product-payment-name">{product.name}</p>
                <p className="product-container-description product-payment-description">{product.description}</p>
                <p className="product-container-price product-payment-price">{`${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</p>
            </div>}
            <div className="payment-container">
                <p className="payment-method-warning">Método de pagamento aceito: cartão de crédito</p>
                <div className="payment-field-div payment-name-div">
                    <label className="payment-field-label payment-name-label">Nome completo no cartão:</label>
                    <input className="payment-field-input payment-name-input" onChange={(event) => setCardOwnerName(event.target.name)}></input>
                </div>
                <div className="payment-field-div payment-cardnumber-div">
                    <label className="payment-field-label payment-cardnumber-label">Número do cartão:</label>
                    <IMaskInput className="payment-field-input payment-cardnumber-input" mask="0000000000000000000" onChange={(event) => setCardNumber(event.target.value)}></IMaskInput>
                </div>
                <div className="payment-field-div payment-expiry-div">
                    <label className="payment-field-label payment-expiry-label">Data de vencimento:</label>
                    <div className="outer-payment-expiry-inputs">
                        <select className="expiry-input expiry-input-month" onChange={(event) => setExpiryMonth(event.target.month)}>
                            {monthOptions.map((number) => (
                                <option className="expiry-input-option expiry-input-option-month" key={number} value={number}>{number < 10 ? `0${number}` : number}</option>
                            ))}
                        </select>
                        <p className="expiry-input-divisor">/</p>
                        <select className="expiry-input expiry-input-year" onChange={(event) => setExpiryYear(event.target.value)}>
                            {yearOptions.map((number) => (
                                <option className="expiry-input-option expiry-input-option-year" key={number} value={number}>{number}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="payment-field-div payment-cvc-div">
                    <label className="payment-field-label payment-cvc-label">CVV:</label>
                    <IMaskInput className="payment-field-input payment-cvc-input" mask="0000" onChange={(event) => setCvc(event.target.value)}></IMaskInput>
                </div>
            </div>
        </div>
    );
}