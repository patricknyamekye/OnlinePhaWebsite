import React from 'react';
import ProductComponent from '../components/ProductsComponents/ProductComponent';
import NavbarComponents from '../components/NavbarComponents/NavbarComponents';
import BannerComponent from '../components/ProductBanner/BannerComponent';
import PdA from '../assets/PdA.png'; // Replace with actual image
import { useCart } from '../components/CartContext/CartContext'; // ✅

const products = [
  { 
    id:1,
    name: 'Panadol Extra',
    description: 'Pain relief & fever reducer',
    price: 75.00,
    image: PdA,
  },
  {
    id:2,
    name: 'Voltaren Emulgel',
    description: 'Anti-inflammatory gel 50g',
    price: 120.00,
    image: PdA,
  },
  {
    id:3,
    name: 'Strepsils Honey & Lemon',
    description: 'Soothing lozenges - 24 pcs',
    price: 60.00,
    image: PdA,
  },
  {
   id:4,
    name: 'Strepsils Menthol',
    description: 'Menthol flavor - 24 pcs',
    price: 60.00,
    image: PdA,
  },
  {id:5,
    name: 'Aspirin 500mg',
    description: 'Pain relief tablets - 20 pcs',
    price: 55.00,
    image: PdA,
  },
  {id:6,
    name: 'Nurofen',
    description: 'Ibuprofen pain relief 200mg - 12 pcs',
    price: 85.00,
    image: PdA,
  },
  {id:7,
    name: 'Imodium',
    description: 'Anti-diarrheal 2mg - 6 tablets',
    price: 48.00,
    image: PdA,
  },
  {id:8,
    name: 'Panadol Cold & Flu',
    description: 'Cold and flu relief - 10 pcs',
    price: 95.00,
    image: PdA,
  },
  {id:9,
    name: 'Cetirizine',
    description: 'Allergy relief - 10 tablets',
    price: 42.00,
    image: PdA,
  },
  {id:10,
    name: 'Vitamin C',
    description: 'Effervescent 1000mg - 10 tablets',
    price: 70.00,
    image: PdA,
  },
];

const ProductPage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id, // ✅ Ensure `id` is passed for context logic
      name: product.name,
      price: product.price,
      image: product.image,
      
    });
  };

  return (
    <>
      <NavbarComponents />
      <br /><br /><br /><br /><br />

      <BannerComponent />
      <br /><br /><br /><br /><br /><br />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px',
          justifyContent: 'center',
        }}
      >
        {products.map((product) => (
          <ProductComponent
            key={product.id}
             id={product.id} 
            name={product.name}
            description={product.description}
            price={product.price} // Changed EGP → GH₵ if you're in Ghana
            image={product.image}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductPage;