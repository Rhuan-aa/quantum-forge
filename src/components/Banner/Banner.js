import img from "./name.png";
import React from "react";
import './Banner.css'

function Banner() {
    return (
        <header className="banner">
            <img src={img} alt="Quantum Forge"/>
        </header>
    )
}

export default Banner;