import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './DashboardMain.module.css'; // Import the CSS module

const DashboardMain = ({ setActiveComponent }) => {
  const [usersCount, setUsersCount] = useState(0);
  const [purchasedItemsCount, setPurchasedItemsCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your API
        const [usersResponse, purchasedItemsResponse, productsResponse] = await Promise.all([
          axios.get('http://localhost:5000/api/users'),
          axios.get('http://localhost:5000/api/get-orders'),
          axios.get('http://localhost:5000/api/get-products'),
        ]);

        setUsersCount(usersResponse.data.length);
        setPurchasedItemsCount(purchasedItemsResponse.data.orders.length);
        setProductsCount(productsResponse.data.products.length);
      } catch (error) {
        setError('Error fetching data.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <div className={styles.cardContainer}>
        {/* Users Card */}
        <div className={styles.card} onClick={() => setActiveComponent('All Users')}>
          <h3>Users</h3>
          <p>{usersCount}</p>
        </div>

        {/* Purchased Items Card */}
        <div className={styles.card} onClick={() => setActiveComponent('Purchased Products')}>
          <h3>Purchased Items</h3>
          <p>{purchasedItemsCount}</p>
        </div>

        {/* Products Card */}
        <div className={styles.card} onClick={() => setActiveComponent('All Products')}>
          <h3>Products</h3>
          <p>{productsCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;