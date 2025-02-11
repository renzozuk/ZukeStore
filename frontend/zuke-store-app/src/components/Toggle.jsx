import "./Toggle.css";
import React, { useState } from 'react';

export default function Toggle(props) {

    return (
        <div className="outer-toggle-container">
            <div className="toggle-container">
                <button className={`toggle-button ${props.placeChoiceOption === 'CEP' ? 'active' : ''}`} onClick={() => props.setPlaceChoiceOption('CEP')}>CEP</button>
                <button className={`toggle-button ${props.placeChoiceOption === 'MAPA' ? 'active' : ''}`} onClick={() => props.setPlaceChoiceOption('MAPA')}>MAPA</button>
            </div>
        </div>
    );
  }