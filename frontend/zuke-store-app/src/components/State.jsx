import { useState } from "react";

export default function State(props) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <path className="state-pointable" onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => props.setStateSelected(props.acronym)} style={{ fillOpacity: 1, fillRule: "evenodd", stroke: '#eee', strokeMiterlimit: 4, strokeDasharray: "none", strokeOpacity: 1, strokeWidth: '0.65px', shapeRendering: "auto", filter: "none", fill: (isHovered ? "#d10012" : "#e22e2d") }} d={props.d}></path>
    );
}