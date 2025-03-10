import React, { useState } from "react";
import "./Form.css";
import TextField from "../TextField/TextField";
import DropDown from "../DropDown/DropDown";
import Button from "../Button/Button";
import PriceField from "../PriceField/PriceField";

const Form = (props) => {

  const [section, setSection] = useState('Computadores')
  const [brand, setBrand] = useState('Dell');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  

  const onSave = (event) => {
    event.preventDefault();

    props.toRegistredProduct(
      {
        "section" : section,
        "brand" : brand,
        "name" : name,
        "price" : price
      }
    );
  }

  return (

    <section className="forms">

      <form onSubmit={onSave}>

        <h2>CADASTRAR PRODUTO</h2>

        <DropDown 
          label="Sessão" 
          itens={props.sections} 
          toChanged={section => setSection}
        />

        <DropDown 
          label="Marca" 
          itens={props.brands} 
          toChanged={brand => setBrand}
        />

        <TextField 
          label="Nome" 
          placeholder="ex: Vivobook 15 X1504za"
          toChanged={name => setName} 
        />

        <PriceField
          label="Preço"
          placeholder="100"
          toChanged={price => setPrice}
        />

        <Button>ENVIAR CADASTRO</Button>

      </form>

    </section>

  );

};

export default Form;
