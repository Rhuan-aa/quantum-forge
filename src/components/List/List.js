import React from "react";
import './List.css';

const List = (props) => {
    
    return (

        <div className="list">

            <h2>PRODUTOS CADASTRADOS</h2>

            {props.objects.map( (object, index) => (

                <div key={index}>

                    <strong>Name:</strong> {object.name} ({object.section}) ({object.brand}) <br />
                    <strong>Price:</strong> {object.price} <br />
                    <hr />
                    
                </div>

            ))}
        </div>

    )

}

export default List;