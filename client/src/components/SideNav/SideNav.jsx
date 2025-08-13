import React from 'react';
import styles from './SideNav.module.css';
import { useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaPlus, FaList, FaShoppingCart, FaUsers, FaSignOutAlt } from 'react-icons/fa';

const SideNav = ({ activeComponent, setActiveComponent }) => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear("user")
    navigate("/")
  }
  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.header}>
          <h1>Adwaso</h1>
        </div>
        <button
          onClick={() => setActiveComponent('Dashboard')}
          className={activeComponent === 'Dashboard' ? styles.active : ''}
        >
          <FaTachometerAlt className={styles.icon} /> Dashboard
        </button>
        <button
          onClick={() => setActiveComponent('Add Product')}
          className={activeComponent === 'Add Product' ? styles.active : ''}
        >
          <FaPlus className={styles.icon} /> Add Product
        </button>
        <button
          onClick={() => setActiveComponent('All Products')}
          className={activeComponent === 'All Products' ? styles.active : ''}
        >
          <FaList className={styles.icon} /> All Products
        </button>
        <button
          onClick={() => setActiveComponent('Purchased Products')}
          className={activeComponent === 'Purchased Products' ? styles.active : ''}
        >
          <FaShoppingCart className={styles.icon} /> Purchased Products
        </button>
        <button
          onClick={() => setActiveComponent('All Users')}
          className={activeComponent === 'All Users' ? styles.active : ''}
        >
          <FaUsers className={styles.icon} /> All Users
        </button>
      </div>
      <button onClick={handleLogout} className={`${styles.logoutButton}`}>
        <FaSignOutAlt className={styles.icon} /> Log Out
      </button>
    </div>
  );
};

export default SideNav;