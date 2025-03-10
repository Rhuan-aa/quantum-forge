import React, { useState } from "react";
import "./Form.css";
import TextField from "../TextField/TextField";
import DropDown from "../DropDown/DropDown";
import Button from "../Button/Button";
import PriceField from "../PriceField/PriceField";
import SwitchButton from "../SwitchButton/SwitchButton";

const Form = (props) => {

  const [section, setSection] = useState('Computadores')
  const [brand, setBrand] = useState('Dell');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isUsed, setIsUsed] = useState(false);
  

  const onSave = (event) => {
    event.preventDefault();

    props.toRegistredProduct(
      {
        "section" : section,
        "brand" : brand,
        "name" : name,
        "price" : price,
        "isUsed" : isUsed
      }
    );
    
    // Limpar formulário após envio
    setName('');
    setPrice('');
    setIsUsed(false);
  }

  return (

    <section className="forms">

      <form onSubmit={onSave}>

        <h2>CADASTRAR PRODUTO</h2>

        <DropDown 
          label="Sessão" 
          itens={props.sections} 
          toChanged={value => setSection(value)}
        />

        <DropDown 
          label="Marca" 
          itens={props.brands} 
          toChanged={value => setBrand(value)}
        />

        <TextField 
          label="Nome" 
          placeholder="ex: Vivobook 15 X1504za"
          value={name}
          toChanged={value => setName(value)} 
        />

        <PriceField
          label="Preço"
          placeholder="100"
          value={price}
          toChanged={value => setPrice(value)}
        />

        <SwitchButton
          label="Produto Usado"
          checked={isUsed}
          onChange={value => setIsUsed(value)}
        />

        <Button>ENVIAR CADASTRO</Button>

      </form>

    </section>

  );

};

export default Form;