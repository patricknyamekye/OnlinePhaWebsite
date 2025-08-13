import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PurchasedProducts.module.css';

const PurchasedProducts = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-orders');
        if (response.status === 200) {
          setOrders(response.data.orders); // Adjust according to your API response structure
        }
      } catch (error) {
        setError('Error fetching orders.');
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/update-order-status/${orderId}`, {
        status: newStatus,
      });
      if (response.status === 200) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === orderId ? { ...order, status: newStatus } : order
          )
        );
      }
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  return (
    <div className={styles.tableContainer}>
      <h2>Purchased Orders</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Order Name</th>
              <th>Date of Order</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Postal Code</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{new Date(order.dateOfOrder).toLocaleDateString()}</td>
                <td>{order.address}</td>
                <td>{order.city}</td>
                <td>{order.country}</td>
                <td>{order.postalCode}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                  >
                    <option value="Order Received">Order Received</option>
                    <option value="Preparing Order">Preparing Order</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PurchasedProducts;