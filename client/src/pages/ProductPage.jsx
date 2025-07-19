import React from 'react';
import ProductComponent from '../components/ProductsComponents/ProductComponent';
import NavbarComponents from '../components/NavbarComponents/NavbarComponents';
import BannerComponent from '../components/ProductBanner/BannerComponent';
import PdA from '../assets/PdA.png'; // Replace with actual image
import { useCart } from '../components/CartContext/CartContext'; // ✅

const products = [
  {
    name: 'Panadol Extra',
    description: 'Pain relief & fever reducer',
    price: 75.00,
    image: PdA,
  },
  {
    name: 'Voltaren Emulgel',
    description: 'Anti-inflammatory gel 50g',
    price: 120.00,
    image: PdA,
  },
  {
    name: 'Strepsils Honey & Lemon',
    description: 'Soothing lozenges - 24 pcs',
    price: 60.00,
    image: PdA,
  },
  {
    name: 'Strepsils Menthol',
    description: 'Menthol flavor - 24 pcs',
    price: 60.00,
    image: PdA,
  },
  {
    name: 'Aspirin 500mg',
    description: 'Pain relief tablets - 20 pcs',
    price: 55.00,
    image: PdA,
  },
  {
    name: 'Nurofen',
    description: 'Ibuprofen pain relief 200mg - 12 pcs',
    price: 85.00,
    image: PdA,
  },
  {
    name: 'Imodium',
    description: 'Anti-diarrheal 2mg - 6 tablets',
    price: 48.00,
    image: PdA,
  },
  {
    name: 'Panadol Cold & Flu',
    description: 'Cold and flu relief - 10 pcs',
    price: 95.00,
    image: PdA,
  },
  {
    name: 'Cetirizine',
    description: 'Allergy relief - 10 tablets',
    price: 42.00,
    image: PdA,
  },
  {
    name: 'Vitamin C',
    description: 'Effervescent 1000mg - 10 tablets',
    price: 70.00,
    image: PdA,
  },
];

const ProductPage = () => {
  const { addToCart } = useCart(); // ✅ Access the addToCart function from context

  // ✅ Handle adding a product to the cart
  const handleAddToCart = (product) => {
    addToCart({
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1, // Optional default quantity
    });
  };

  return (
    <>
      <NavbarComponents />
      <br /><br /><br /><br /><br />

      <BannerComponent />
      <br /><br /><br /><br /><br /><br />

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
        justifyContent: 'center'
      }}>
        {products.map((product, index) => (
          <ProductComponent
            key={index}
            name={product.name}
            description={product.description}
            price={`EGP ${product.price.toFixed(2)}`}
            image={product.image}
            onAddToCart={() => handleAddToCart(product)} // ✅ Call context function
          />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
