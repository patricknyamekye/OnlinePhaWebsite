import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';
import styles from './CheckoutComponent.module.css';
import { useNavigate } from 'react-router-dom'; 


const CheckoutComponent = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate(); 

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

 const handleCheckout = () => {
  const trackingId = 'TRK' + Math.floor(Math.random() * 8000000000); // fake tracking ID
  // Pass tracking ID to tracking page
  navigate(`/tracking/${trackingId}`, { state: { trackingId } });
};

  return (
    <div className={styles.checkoutContainer}>
      <h1>Checkout</h1>
      <div className={styles.checkoutSections}>
        {/* Shipping Info */}
        <div className={styles.section}>
          <h2>Shipping Information</h2>
          <form className={styles.form}>
            <label>
              Full Name
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              Address
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </label>
            <label>
              City
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
            </label>
            <label>
              Postal Code
              <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
            </label>
            <label>
              Country
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
            </label>
          </form>
        </div>

        {/* Payment Info */}
        <div className={styles.section}>
          <h2>Payment Information</h2>
          <form className={styles.form}>
            <label>
              Card Number
              <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
            </label>
            <label>
              Expiry Date
              <input type="text" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
            </label>
            <label>
              CVV
              <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
            </label>
          </form>
        </div>

        {/* Order Summary */}
        <div className={styles.section}>
          <h2>Order Summary</h2>
          <ul className={styles.cartItems}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <span>{item.title} x {item.quantity}</span>
                <span>GH₵ {(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <span>Total:</span>
            <span>GH₵ {totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <button className={styles.placeOrderBtn} onClick={handleCheckout}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutComponent;
