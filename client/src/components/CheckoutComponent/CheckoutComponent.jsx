import React, { useState, useEffect } from 'react';
import styles from './CheckoutComponent.module.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { PaystackButton } from 'react-paystack';

const CheckoutComponent = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const location = useLocation();
  const cart = location.state?.cart || [];

  useEffect(() => {
    // Get user data from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setShippingInfo({
        name: user.fullName || '',
        address: user.address || '',
        city: user.city || '',
        postalCode: user.postalCode || '',
        country: user.country || '',
      });
    }
  }, []);

  const handleShippingChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const amount = totalPrice * 100; // Convert to pesewas

  const handlePaymentSuccess = async (reference) => {
    console.log('Payment successful!', reference);

    try {
      const response = await axios.post('http://localhost:5000/api/checkout', {
        userId,
        cart: cart, 
        shippingInfo
      });

      console.log(response)
  
      if (response.status === 200) {
        navigate(`/tracking/${userId}`); // Redirect to a success page
      }

    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  const handlePaymentClose = () => {
    console.log('Payment closed');
  };

  const componentProps = {
    email: JSON.parse(localStorage.getItem('user')).email, // Assuming email is stored in user object
    amount, // Amount in pesewas
    publicKey: 'pk_test_201a7fc56153c4c1e064b22f6811400ac80a9c41', // Replace with your Paystack public key
    text: "Proceed to Payment",
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
    currency: 'GHS', // Set currency to GHS (Ghanaian Cedis)
  };

  const handleCheckout = async () => {
    
  };

  return (
    <div className={styles.checkoutContainer}>
      <h1>Checkout</h1>
      <div className={styles.checkoutSections}>
        <div className={styles.section}>
          <h2>Shipping Information</h2>
          <form className={styles.form}>
            {/* Shipping Form Inputs */}
            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={handleShippingChange}
                required
              />
            </label>
            <label>
              Address
              <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleShippingChange}
                required
              />
            </label>
            <label>
              City
              <input
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleShippingChange}
                required
              />
            </label>
            <label>
              Postal Code
              <input
                type="text"
                name="postalCode"
                value={shippingInfo.postalCode}
                onChange={handleShippingChange}
                required
              />
            </label>
            <label>
              Country
              <input
                type="text"
                name="country"
                value={shippingInfo.country}
                onChange={handleShippingChange}
                required
              />
            </label>
          </form>
        </div>
   
  
      </div>
      <div className={styles.section}>
          <h2>Order Summary</h2>
          <ul className={styles.cartItems}>
            {cart && cart.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <span>{item.name} x {item.quantity}</span>
                <span>GHC {(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <span>Total:</span>
            <span>GHC {totalPrice.toFixed(2)}</span>
          </div>
        </div>
      <PaystackButton className={styles.paymentBtn} {...componentProps} />
    </div>
  );
};

export default CheckoutComponent;