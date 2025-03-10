import React from "react";
import "./Section.css";
import Product from "../Product/Product";

const Section = (props) => {
  return props.products.length > 0 ? (
    <section className="section">
      <h3>{props.name}</h3>
      <div className="product-list">
        {props.products.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            brand={product.brand}
            image_link={product.image_link}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Section;
