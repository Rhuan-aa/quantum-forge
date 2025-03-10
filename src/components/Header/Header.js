import "./Header.css";
import React from "react";
import icon from "./icon.png";

function Header() {
    return (
        <header className="header">
            <nav>
                <img src={icon} alt='icone' id='icon'/>
            </nav>
        </header>
    )
}

export default Header;