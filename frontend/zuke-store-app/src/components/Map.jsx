import "./Map.css";
import statesData from "/public/statesData.json";
import State from "./State";

export default function CustomMap(props) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="798.4" height="755.81" version="1.1" viewBox="95.098 33.789 234.166 237.509" preserveAspectRatio="xMinYMin">
            {statesData.states.map((state) => (
                <State setStateSelected={props.setStateSelected} acronym={state.acronym} d={state.d} />
            ))}
        </svg>
    );
}