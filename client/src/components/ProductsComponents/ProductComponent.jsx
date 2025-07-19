// src/components/ProductComponent.jsx
import React from 'react';
import styles from './ProductComponent.module.css'; // Import CSS Module

const ProductComponent = ({ 
  name
  , description,
   price, 
   image, 
   onAddToCart
   }) => {
  return (
    <div className={styles.productCard}>
      <h3 className={styles.productName}>{name}</h3>
      <img src={image} alt={name} className={styles.productImage} />
      <p className={styles.productDescription}>{description}</p>
      <div className={styles.productFooter}>
        <span className={styles.productPrice}>{price}</span>
        <button className={styles.addToCartBtn} onClick={onAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
