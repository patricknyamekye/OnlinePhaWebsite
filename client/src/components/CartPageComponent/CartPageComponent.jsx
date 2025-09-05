import React, { useEffect, useState } from 'react';
import styles from './CartPageComponent.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'

const CartPageComponent = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const user = localStorage.getItem('user')
    const {userId} = useParams()

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

            deleteFromCart(index)
        }
    };

    const updateCartOnServer = async (updatedCart) => {
        await axios.post(`http://localhost:5000/api/user/${userId}/update-cart`, { cart: updatedCart });
    };

    const deleteFromCart = async (productId) => {
        console.log("Product id", productId)
        try {
            await axios.delete("http://localhost:5000/api/delete-from-cart", {
                data: { userId, productId }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteClick = (index) => {
        setDeleteIndex(index);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = async () => {
        if (deleteIndex !== null) {
            const item = cart[deleteIndex];
            try {
                await deleteFromCart(item.productId);
                const updatedCart = [...cart];
                updatedCart.splice(deleteIndex, 1);
                setCart(updatedCart);
            } catch (error) {
                console.error('Error removing item from cart:', error);
            }
            setShowDeleteModal(false);
            setDeleteIndex(null);
        }
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
        setDeleteIndex(null);
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
                                <div className={styles.itemImg}>
                                    <img src={`http://localhost:5000/uploads/${item.productImg}`} alt="product image" />
                                </div>
                                <span>{item.name}</span>
                                <div className={styles.quantityControl}>
                                    <button onClick={() => handleDecrement(index, item.quantity)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleIncrement(index, item.quantity)}>+</button>
                                </div>
                                <span>GHC {item.price * item.quantity}</span>
                                <div className={styles.cartBtns}>
                                    <button onClick={() => handleDeleteClick(index)} className={styles.delete}> <FaTrash /> </button>
                                    <button onClick={() => {navigate(`/checkout/${userId}`, { state: { cart: [{ ...item }] } });} } className={styles.buyOne}>Buy</button>
                                </div>
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

            {/* Delete confirmation modal */}
            {showDeleteModal && (
                <div className={styles.confirmOverlay}>
                    <div className={styles.confirmModal}>
                        <p>Are you sure you want to remove this item from your cart?</p>
                        <button onClick={handleConfirmDelete} className={styles.confirmBtn}>Proceed</button>
                        <button onClick={handleCancelDelete} className={styles.cancelBtn}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPageComponent;