import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./TrackComponent.module.css"; // Import styles

const TRACKING_STAGES = [
  "Order Received",
  "Preparing Order",
  "Out for Delivery",
  "Delivered",
];

const TrackComponent = () => {
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusIndexes, setStatusIndexes] = useState({}); // Track status for each product

  // Parse user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user._id : null;

  useEffect(() => {
    const fetchPurchasedItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/${userId}`
        );
        console.log(response);
        if (response.status === 200) {
          setPurchasedItems(response.data.purchasedProducts);
          // Initialize status indexes for each product
          const initialIndexes = {};
          response.data.purchasedProducts.forEach((item, index) => {
            initialIndexes[index] = 0;
          });
          setStatusIndexes(initialIndexes);
        }
      } catch (err) {
        setError("Failed to fetch purchased items.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedItems();
  }, [userId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndexes((prev) => {
        const updatedIndexes = { ...prev };
        Object.keys(updatedIndexes).forEach((key) => {
          if (updatedIndexes[key] < TRACKING_STAGES.length - 1) {
            updatedIndexes[key] += 1;
          }
        });
        return updatedIndexes;
      });
    }, 20 * 1000); // 20 seconds

    return () => clearInterval(interval);
  }, []);

  // Format date to a more readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          {purchasedItems.length > 0 ? (
            <>
              <h1>Thank You for Your Purchase!</h1>
              <table className={styles.itemTable}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Purchase Date</th>
                    <th>Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  {purchasedItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>GHC {item.price.toFixed(2)}</td>
                      <td>{formatDate(item.purchaseDate)}</td>
                      <td>
                        <span
                          className={
                            statusIndexes[index] < TRACKING_STAGES.length
                              ? styles.active
                              : styles.completed
                          }
                        >
                          {TRACKING_STAGES[statusIndexes[index]]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p>No purchased items found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default TrackComponent;
