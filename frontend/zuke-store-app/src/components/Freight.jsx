import "./Freight.css";
import { useState } from "react";

export default function Freight(props) {

    const [stateHovered, setStateHovered] = useState(null);
    const [stateSelected, setStateSelected] = useState(null);

    return (
        <div className="freight-div">
            <div className="outer-freight-close-button">
                <button className="freight-close-button" onClick={() => props.setShowFreight(false)}>X</button>
            </div>
        </div>
    );
}