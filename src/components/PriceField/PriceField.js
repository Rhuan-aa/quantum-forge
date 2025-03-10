import React, { useState } from "react";
import './PriceField.css'

const PriceField = (props) => {

    const whenTyped = (event) => {
        props.toChanged(event.target.value);
    }

    return (
        <div className="price-field">
            <label>{props.label}</label>
            <input 
                onChange={whenTyped} 
                placeholder={props.placeholder} 
                type="number"
                step="1"
                min="0"
            />
        </div>
    )
    
}

export default PriceField;