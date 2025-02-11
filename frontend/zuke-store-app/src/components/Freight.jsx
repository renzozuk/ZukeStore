import "./Freight.css";
import { useState } from "react";
import CustomMap from "./Map";

export default function Freight(props) {

    const [stateSelected, setStateSelected] = useState(null);

    let statesRelation = new Map();

    statesRelation.set('AC', { name: 'o Acre', price: 59.99 });
    statesRelation.set('AL', { name: 'o Alagoas', price: 39.99 });
    statesRelation.set('AM', { name: 'o Amazonas', price: 49.99 });
    statesRelation.set('AP', { name: 'o Amapá', price: 69.99 });
    statesRelation.set('BA', { name: 'a Bahia', price: 34.99 });
    statesRelation.set('CE', { name: 'o Ceará', price: 39.99 });
    statesRelation.set('DF', { name: 'o Distrito Federal', price: 29.99 });
    statesRelation.set('ES', { name: 'o Espírito Santo', price: 24.99 });
    statesRelation.set('GO', { name: 'o Goiás', price: 29.99 });
    statesRelation.set('MA', { name: 'o Maranhão', price: 44.99 });
    statesRelation.set('MT', { name: 'o Mato Grosso', price: 34.99 });
    statesRelation.set('MS', { name: 'o Mato Grosso do Sul', price: 32.99 });
    statesRelation.set('MG', { name: 'Minas Gerais', price: 24.99 });
    statesRelation.set('PA', { name: 'o Pará', price: 49.99 });
    statesRelation.set('PB', { name: 'a Paraíba', price: 39.99 });
    statesRelation.set('PR', { name: 'o Paraná', price: 24.99 });
    statesRelation.set('PE', { name: 'Pernambuco', price: 39.99 });
    statesRelation.set('PI', { name: 'o Piauí', price: 42.99 });
    statesRelation.set('RJ', { name: 'o Rio de Janeiro', price: 22.99 });
    statesRelation.set('RN', { name: 'o Rio Grande do Norte', price: 39.99 });
    statesRelation.set('RO', { name: 'Rondônia', price: 58.99 });
    statesRelation.set('RR', { name: 'Roraima', price: 69.99 });
    statesRelation.set('RS', { name: 'o Rio Grande do Sul', price: 34.99 });
    statesRelation.set('SC', { name: 'Santa Catarina', price: 29.99 });
    statesRelation.set('SP', { name: 'São Paulo', price: 19.99 });
    statesRelation.set('SE', { name: 'Sergipe', price: 38.99 });
    statesRelation.set('TO', { name: 'o Tocantins', price: 41.99 });

    return (
        <div className="freight-div">
            <div className="outer-freight-close-button">
                <button className="freight-close-button" onClick={() => props.setShowFreight(false)}>X</button>
            </div>
            <p className="freight-instruction-label">Digite o seu CEP ou selecione o seu estado no mapa</p>
            <div className="outer-place-selector">
                <CustomMap setStateSelected={setStateSelected} />
            </div>
            {stateSelected != null && <p className="freight-price-label">{`Preço do frete para ${statesRelation.get(stateSelected).name}: ${statesRelation.get(stateSelected).price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</p>}
        </div>
    );
}