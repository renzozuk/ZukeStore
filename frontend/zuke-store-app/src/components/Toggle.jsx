import "./Toggle.css";
import React from 'react';

export default function Toggle(props) {

    const toggleChange = (pcOption) => {
        props.setPlaceChoiceOption(pcOption);
        props.setStateSelected(null);
        props.setAddress(null);
        props.setCep(null);
    }

    return (
        <div className="outer-toggle-container">
            <div className="toggle-container">
                <button className={`toggle-button ${props.placeChoiceOption === 'CEP' ? 'active' : ''}`} onClick={() => toggleChange('CEP')}>CEP</button>
                <button className={`toggle-button ${props.placeChoiceOption === 'MAPA' ? 'active' : ''}`} onClick={() => toggleChange('MAPA')}>MAPA</button>
            </div>
        </div>
    );
}