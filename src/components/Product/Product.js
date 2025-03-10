import React from "react";  
import './Product.css';

const Product = (props) => {
    return (
        <div className="product">
            <div className="header">
                <img src={props.image_link} alt="logo-marca" />
                {props.isUsed && <div className="used-badge">Usado</div>}
            </div>
            <div className="footer">
                <h4>{props.name}</h4>
                {props.price && <div className="price">R$ {props.price}</div>}
            </div>
        </div>
    );
}

export default Product;