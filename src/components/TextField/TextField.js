import React, { useState } from "react";
import './TextField.css'

const TextField = (props) => {

    const whenTyped = (event) => {
        props.toChanged(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input onChange={whenTyped} placeholder={props.placeholder} />
        </div>
    )
    
}

export default TextField;