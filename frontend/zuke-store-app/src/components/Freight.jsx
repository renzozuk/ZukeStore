import "./Freight.scss";
import { useState } from "react";
import CustomMap from "./Map";
import { IMaskInput } from "react-imask";
import statesData from "/public/statesData.json";
import Toggle from "./Toggle";

export default function Freight() {

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

    statesData.states.forEach((state) => {
        const { acronym, article, name, price } = state;
        const fullName = article ? `${article} ${name}` : name;
        statesRelation.set(acronym, { name: fullName, price });
    });

    return (
        <div className="outer-freight-div">
            <div className={`freight-div${placeChoiceOption == 'CEP' ? ` freight-div-cep` : ``}${placeChoiceOption == 'MAPA' ? ` freight-div-mapa` : ``}`}>
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
        </div>
        
    );
}