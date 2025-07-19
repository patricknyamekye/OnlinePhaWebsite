// src/components/ProductComponent.jsx
import React from 'react';
import styles from './ProductComponent.module.css';
import { useCart } from '../../components/CartContext/CartContext';



const ProductComponent = ({ id, name, description, price, image }) => {
  const { addToCart } = useCart(); // ✅ Get addToCart from context

  const handleAddToCart = () => {
    const product = { id, name, description, price, image };
    addToCart(product); // ✅ Add product to cart
  };

  return (
    <div className={styles.productCard}>
      <h3 className={styles.productName}>{name}</h3>
      <img src={image} alt={name} className={styles.productImage} />
      <p className={styles.productDescription}>{description}</p>
      <div className={styles.productFooter}>
        <span className={styles.productPrice}>{price}</span>
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
