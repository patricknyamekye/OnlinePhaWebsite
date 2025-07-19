import React from 'react';
import styles from './ProductComponent.module.css';
import { useCart } from '../../components/CartContext/CartContext';

const ProductComponent = ({ id, name, description, price, image }) => {
  const { addToCart, cartItems } = useCart(); // ⬅️ get cartItems

 

  const handleAddToCart = () => {
    const product = { id, name, description, price, image };
    addToCart(product);
  };

  return (
    <div className={styles.productCard}>
      <h3 className={styles.productName}>{name}</h3>
      <img src={image} alt={name} className={styles.productImage} />
      <p className={styles.productDescription}>{description}</p>
      <div className={styles.productFooter}>
        <span className={styles.productPrice}>GH₵ {Number(price).toFixed(2)}</span>
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
      
    </div>
  );
};
export default ProductComponent;
