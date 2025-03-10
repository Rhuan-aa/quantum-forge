import React from "react";
import "./Section.css";
import Product from "../Product/Product";

const Section = (props) => {
  return props.products.length > 0 ? (
    <section className="section">
      <h3>{props.name}</h3>
      <div className="product-list">
        {props.products.map((product, index) => (
          <Product
            key={`${product.name}-${index}`}
            name={product.name}
            brand={product.brand}
            price={product.price}
            image_link={product.image_link}
            isUsed={product.isUsed}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Section;