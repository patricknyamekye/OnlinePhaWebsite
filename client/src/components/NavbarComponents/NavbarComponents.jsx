import React from 'react'
import styles from "./Navbar.module.css";


const NavbarComponents = () => {
  return (
 <nav className={styles.navbar}>
      <div className={styles.logo}><li>Pharm</li></div>
      <ul className={styles.navLinks}>
        <li><a href="/home">Home</a></li>
        <li><a href="/product">Product</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}

export default NavbarComponents