import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-div">
            <Link className="header-link" to=""><p className="header-title">Zuke Store</p></Link>
        </div>
    );
}