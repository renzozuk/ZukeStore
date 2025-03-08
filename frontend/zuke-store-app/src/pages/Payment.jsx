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
    const yearOptions = Array.from({ length: 26 }, (_, index) => currentYear + index);

    const [showCardBack, setShowCardBack] = useState(false);

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
            <div className="outer-payment-container">
                <div className="payment-container">
                    <p className="payment-method-warning">Método de pagamento aceito: cartão de crédito</p>
                    <div className="payment-field-div payment-name-div">
                        <label className="payment-field-label payment-name-label">Nome completo no cartão:</label>
                        <input className="payment-field-input payment-name-input" onChange={(event) => setCardOwnerName(event.target.value)} onClick={() => setShowCardBack(false)}></input>
                    </div>
                    <div className="payment-field-div payment-cardnumber-div">
                        <label className="payment-field-label payment-cardnumber-label">Número do cartão:</label>
                        <IMaskInput className="payment-field-input payment-cardnumber-input" mask="0000000000000000000" onChange={(event) => setCardNumber(event.target.value)} onClick={() => setShowCardBack(false)}></IMaskInput>
                    </div>
                    <div className="payment-field-div payment-expiry-div">
                        <label className="payment-field-label payment-expiry-label">Data de vencimento:</label>
                        <div className="outer-payment-expiry-inputs">
                            <select className="expiry-input expiry-input-month" onChange={(event) => setExpiryMonth(event.target.value)} onClick={() => setShowCardBack(false)}>
                                {monthOptions.map((number) => (
                                    <option className="expiry-input-option expiry-input-option-month" key={number} value={number}>{number < 10 ? `0${number}` : number}</option>
                                ))}
                            </select>
                            <p className="expiry-input-divisor">/</p>
                            <select className="expiry-input expiry-input-year" onChange={(event) => setExpiryYear(event.target.value)} onClick={() => setShowCardBack(false)}>
                                {yearOptions.map((number) => (
                                    <option className="expiry-input-option expiry-input-option-year" key={number} value={number}>{number}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="payment-field-div payment-cvc-div">
                        <label className="payment-field-label payment-cvc-label">CVV:</label>
                        <IMaskInput className="payment-field-input payment-cvc-input" mask="0000" onChange={(event) => setCvc(event.target.value)} onClick={() => setShowCardBack(true)}></IMaskInput>
                    </div>
                    {/* <p>Número do cartão de crédito{!isValid(cardNumber) && ` não`} é válido</p> */}
                    {showCardBack ? 
                    <div  className="card card-back">
                        <div className="card-back-first-space"></div>
                        <div className="card-back-second-space">
                            <p className="card-back-label card-back-cvc">{cvc.length > 0 ? cvc : "{CVV}"}</p>
                        </div>
                        <div className="card-back-third-space"></div>
                    </div> : 
                    <div className="card card-front">
                        <div className="outer-card-brand">
                            {(isValid(cardNumber) && isVisa(cardNumber)) && <img className="card-brand visa-card-brand" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"></img>}
                            {(isValid(cardNumber) && isMasterCard(cardNumber)) && <img className="card-brand mastercard-card-brand" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"></img>}
                        </div>
                        <img className="card-front-chip" src="https://upload.wikimedia.org/wikipedia/commons/6/63/Farm-Fresh_card_chip_gold.png"></img>
                        <p className="card-front-label card-front-cardnumber" value="0">
                            {cardNumber.length === 0 && "{Número do cartão}"}
                            {cardNumber.length === 16 && `${cardNumber.substring(0, 4)} ${cardNumber.substring(4, 8)} ${cardNumber.substring(8, 12)} ${cardNumber.substring(12, 16)}`}
                            {(cardNumber.length != 0 && cardNumber.length != 16) && cardNumber}
                        </p>
                        <p className="card-front-label card-front-expirylabel">Válido até:</p>
                        <p className="card-front-label card-front-expirydate">{`${expiryMonth < 10 ? `0${expiryMonth}`: expiryMonth}/${expiryYear.toString().substring(2, 4)}`}</p>
                        <p className="card-front-label card-front-ownername">{cardOwnerName.length > 0 ? cardOwnerName : "{Nome do utilizador do cartão}"}</p>
                    </div>}
                </div>
            </div> 
        </div>
    );
}