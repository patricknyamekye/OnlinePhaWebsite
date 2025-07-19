import React from 'react';
import ProductComponent from '../components/ProductsComponents/ProductComponent';
import NavbarComponents from '../components/NavbarComponents/NavbarComponents';
import BannerComponent from '../components/ProductBanner/BannerComponent';

import PdA from '../assets/PdA.png'; // Replace with actual image

const products = [
  {
    name: 'Panadol Extra',
    description: 'Pain relief & fever reducer',
    price: 'EGP 75.00',
    image: PdA,
  },
  {
    name: 'Voltaren Emulgel',
    description: 'Anti-inflammatory gel 50g',
    price: 'EGP 120.00',
    image: PdA,
  },
  {
    name: 'Strepsils Honey & Lemon',
    description: 'Soothing lozenges - 24 pcs',
    price: 'EGP 60.00',
    image: PdA,
  },
    {
    name: 'Strepsils Honey & Lemon',
    description: 'Soothing lozenges - 24 pcs',
    price: 'EGP 60.00',
    image: PdA,
  },  {
    name: 'Strepsils Honey & Lemon',
    description: 'Soothing lozenges - 24 pcs',
    price: 'EGP 60.00',
    image: PdA,
  },  {
    name: 'Strepsils Honey & Lemon',
    description: 'Soothing lozenges - 24 pcs',
    price: 'EGP 60.00',
    image: PdA,
  },  {
    name: 'Strepsils Honey & Lemon',
    description: 'Soothing lozenges - 24 pcs',
    price: 'EGP 60.00',
    image: PdA,
  },  {
    name: 'Strepsils Honey & Lemon',
    description: 'Soothing lozenges - 24 pcs',
    price: 'EGP 60.00',
    image: PdA,
  },  {
    name: 'Strepsils Honey & Lemon',
    description: 'Soothing lozenges - 24 pcs',
    price: 'EGP 60.00',
    image: PdA,
  },  {
    name: 'Strepsils Honey & Lemon',
    description: 'Soothing lozenges - 24 pcs',
    price: 'EGP 60.00',
    image: PdA,
  },
];

const ProductPage = () => {
  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <>
      <NavbarComponents />
       <br />
      <br />
      <br />
      <br />
      <br />
       <BannerComponent />
        <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <ProductComponent
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            onAddToCart={() => handleAddToCart(product.name)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
