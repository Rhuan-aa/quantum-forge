import React from "react";  
import './Product.css';

const Product = (props) => {
    return (
        <div className="product">
            <div className="header">
                <img src={props.image_link} alt="logo-marca" />
            </div>
            <div className="footer">
                <h4>{props.name}</h4>
                <h5>{props.brand}</h5>
            </div>
        </div>
    );
}

export default Product;