import React, { useEffect, useState } from 'react';
import styles from './CartPageComponent.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CartPageComponent = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const user = localStorage.getItem('user')
    const {userId} = useParams()

    // console.log("User:", userId)

    const handleCheckout = () => {
        navigate(`/checkout/${userId}`, { state: { cart } });
    };

    const handleIncrement = async (index) => {
        const item = cart[index];
        
        if ( item.quantity < item.productQuantity) {
            try {
                const response = await axios.put(`http://localhost:5000/api/increase-product-quantity/${item.productId}/${userId}`);
                 setCart(response.data.cart);
             } catch (error) {
                 console.error('Error incrementing quantity:', error);
             }
        }
    };

    const handleDecrement = async (index, quantity) => {
        const item = cart[index];
        
        if (quantity > 1) { 
            try {
              const response = await axios.put(`http://localhost:5000/api/decrease-product-quantity/${item.productId}/${userId}`);
                setCart(response.data.cart);
            } catch (error) {
                console.error('Error decrementing quantity:', error);
            }
        } else {
            // Optionally handle removing item from cart if quantity is 1 and user wants to decrement
            handleRemove(index);
        }
    };

    const handleRemove = async (index) => {
        const item = cart[index];
        
        try {
            await axios.post(`http://localhost:5000/api/${userId}/remove-from-cart`, { productId: item.productId });
            const updatedCart = [...cart];
            updatedCart.splice(index, 1);
            setCart(updatedCart);
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const updateCartOnServer = async (updatedCart) => {
        await axios.post(`http://localhost:5000/api/user/${userId}/update-cart`, { cart: updatedCart });
    };

    useEffect(() => {
       const getCart = async () => {
        const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
        if (response.status === 200) {
            setCart(response.data.cart);
        }
    };
        getCart();
    }, [userId]);

    // Calculate total price from individual item subtotals
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Your Cart</h2>
                {cart.length > 0 ? (
                    <ul className={styles.cartItems}>
                        {cart.map((item, index) => (
                            <li key={index} className={styles.cartItem}>
                                <span>{item.name}</span>
                                <div className={styles.quantityControl}>
                                    <button onClick={() => handleDecrement(index, item.quantity)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleIncrement(index, item.quantity)}>+</button>
                                </div>
                                <span>GHC {item.price * item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                <div className={styles.modalFooter}>
                  <p className={styles.totalPrice}>Total: GHC {total}</p>
                    {cart.length > 0 && <button onClick={handleCheckout} className={styles.checkoutBtn}>Proceed to Checkout</button>}
                </div>
            </div>
        </div>
    );
};

export default CartPageComponent;