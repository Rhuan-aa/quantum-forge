import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form"
import { useState } from "react";
import Section from "./components/Section/Section";

function App() {

  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    const brand = brands.find(branding => branding.name === product.brand);
    const newProduct = { ...product, image_link: brand.image_link };
    setProducts([...products, newProduct]);
  }

  const sections = [
    { name: 'Computadores' },
    { name: 'Acessórios' },
    { name: 'Impressoras' },
    { name: 'Games' },
    { name: 'Gadgets' }
  ];

  const brands = [
    { name: 'HP', image_link: '/images/hp.png' },
    { name: 'Dell', image_link: '/images/dell.png' },
    { name: 'Positivo', image_link: '/images/positivo.png' },
    { name: 'Asus', image_link: '/images/asus.jpg' },
    { name: 'Huawei', image_link: '/images/huawei.png' }
  ];

  const sectionList = sections.map(section => section.name);
  const brandList = brands.map(brand => brand.name);

  return (
    <div>
      <Header />
      <Banner />
      <Form toRegistredProduct={addProduct} brands={brandList} sections={sectionList} />
      {sections.map((section) => (
        <Section key={section.name} 
                 name={section.name}
                 products={products.filter(product => product.section === section.name)} />
      ))}
    </div>
  );
}

export default App;