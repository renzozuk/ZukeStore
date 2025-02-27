import "./Freight.css";
import { useState } from "react";
import CustomMap from "./Map";
import { IMaskInput } from "react-imask";
import Toggle from "./Toggle";

export default function Freight(props) {

    const [placeChoiceOption, setPlaceChoiceOption] = useState("CEP");
    const [stateSelected, setStateSelected] = useState(null);
    const [address, setAddress] = useState(null);
    const [cep, setCep] = useState(null);

    const getAddress = () => {
        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then((response) => response.json())
            .then((cepData) => {
                setAddress(`${cepData.logradouro}, ${cepData.bairro} - ${cepData.localidade} - ${cepData.uf}`);
                setStateSelected(cepData.uf);
            })
    };

    const handleCepInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            getAddress();
        }
    }

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
        <div className={`freight-div ${placeChoiceOption == 'CEP' && `freight-div-cep`} ${placeChoiceOption == 'MAPA' && `freight-div-mapa`}`}>
            {/* <div className="outer-freight-close-button">
                <button className="freight-close-button" onClick={() => props.setShowFreight(false)}>X</button>
            </div> */}
            <p className="freight-instruction-label">Digite o seu CEP ou selecione o seu estado no mapa</p>
            <Toggle placeChoiceOption={placeChoiceOption} setPlaceChoiceOption={setPlaceChoiceOption} setStateSelected={setStateSelected} setAddress={setAddress} setCep={setCep} />
            <div className="outer-place-selector">
                {placeChoiceOption === "CEP" && <div className="cep-div">
                    <label className="cep-label">Insira o seu CEP:</label>
                    <div className="cep-input-div">
                        <IMaskInput className="cep-input" mask="00000-000" onChange={(event) => setCep(event.target.value)} onKeyDown={handleCepInputKeyDown} />
                        <button className="cep-button" onClick={getAddress}>{`>`}</button>
                    </div>
                </div>}
                {placeChoiceOption === "MAPA" && <CustomMap setStateSelected={setStateSelected} />}
            </div>
            {stateSelected != null && <p className="freight-price-label">{`Preço do frete para ${address || statesRelation.get(stateSelected).name}: ${statesRelation.get(stateSelected).price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</p>}
        </div>
    );
}