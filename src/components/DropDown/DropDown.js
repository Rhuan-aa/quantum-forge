import React from "react";
import './DropDown.css';

const DropDown = (props) => {

    const toSelected = (event) => {
        props.toChanged(event.target.value);
    }

    return (

        <div className="drop-down">
            <label>{props.label}</label>
            <select onChange={toSelected}>
                {props.itens.map( item => <option key={item}>{item}</option>)}
            </select>
        </div>

    )

}

export default DropDown;