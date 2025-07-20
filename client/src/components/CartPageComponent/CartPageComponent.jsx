import React from 'react';
import { useCart } from '../CartContext/CartContext';
import styles from './CartPageComponent.module.css';
import { useNavigate } from 'react-router-dom';

const CartPageComponent = () => {
  const { cartItems, removeFromCart, incrementQty, decrementQty } = useCart();
  const navigate = useNavigate();

  const getSubtotal = () => {
    return cartItems
      .reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items before proceeding to checkout.');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartItems}>
        <h2>Cart ({cartItems.length})</h2>
        {cartItems.map((item) => (
          <div className={styles.cartItem} key={item.id}>
            <img src={item.image} alt={item.title} className={styles.itemImage} />
            <div className={styles.itemDetails}>
              <h3>{item.title}</h3>
              {item.stock <= 10 && (
                <p className={styles.stockText}>{item.stock} units left</p>
              )}
              <p className={styles.itemPrice}>
                GH₵ {Number(item.price).toFixed(2)}
              </p>

              <div className={styles.quantityControls}>
                <button onClick={() => decrementQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQty(item.id)}>+</button>
              </div>

              <button
                className={styles.removeBtn}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <h3>CART SUMMARY</h3>
        <p>Item's total ({cartItems.length})</p>
        <p>
          <strong>Subtotal: GH₵ {getSubtotal()}</strong>
        </p>

        <button
          className={styles.checkoutBtn}
          onClick={handleCheckout}
        >
          Checkout (GH₵ {getSubtotal()})
        </button>
      </div>
    </div>
  );
};

export default CartPageComponent;
