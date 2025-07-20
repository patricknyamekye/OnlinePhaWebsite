import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import pillsLogo from '../../assets/pills.png';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { RiUploadCloudLine } from 'react-icons/ri';
import { TfiMenu } from 'react-icons/tfi';
import { useCart } from '../CartContext/CartContext';

const NavbarComponents = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const fileInputRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Uploaded image:', file);
      // You could display the image preview or upload it to a backend service here
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span><img src={pillsLogo} alt="logo" /></span>
        <li className={styles.logoname}>WellCare</li>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/contact-us">Contact</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      <ul className={styles.ups}>
        <li className={styles.log}><Link to="/login">Login</Link></li>
        <li className={styles.log}><Link to="/signUp">SignUp</Link></li>

        <li className={styles.cartIcon}>
          <Link to="/cards" className={styles.cartLink}>
            <LiaShoppingCartSolid />
            {cartItems.length > 0 && (
              <span className={styles.cartCount}>
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </li>

        {/* Upload Icon and File Input */}
        <li>
          <button
            onClick={handleUploadClick}
            className={styles.uploadButton}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Upload Image"
          >
            <RiUploadCloudLine size={22} />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </li>

        <li className={styles.menu} onClick={handleMenuClick}>
          <TfiMenu />
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponents;
