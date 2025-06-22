import React, { useState } from 'react'
import styles from "./Navbar.module.css";
import pillsLogo from "../../assets/pills.png";
import { FaHome, FaBox, FaPhone, FaSignInAlt } from "react-icons/fa";import { LiaShoppingCartSolid } from "react-icons/lia"
import { RiUploadCloudLine } from "react-icons/ri";
import { LiaUserInjuredSolid } from "react-icons/lia";
import { TfiMenu } from "react-icons/tfi";



const NavbarComponents = () => {

  const [menuOpen, setMenuOpen] = useState(false );

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }


  return (
 <nav className={styles.navbar}>
      <div className={styles.logo}>
       
        <span><img src= {pillsLogo} alt="" /></span>
         <li className={styles.logoname}>WellCare     </li> 
          
         </div>
      <ul className={` ${styles.navLinks}  ${menuOpen ? styles.showMenu : "" }` }>
        <li><a href="/home"> <FaHome/>Home</a></li>
        <li><a href="/product"><FaBox/> Product</a></li>
        <li><a href="/contact"> Contact <FaPhone/></a></li>
        <li><a href="/contact"> Services <LiaUserInjuredSolid /></a></li>
        <li><a href="/contact"> About Us<FaPhone/></a></li>
        <li><a href="/login"> Login <FaSignInAlt/></a></li>
      
      </ul>

      <ul className={styles.ups}>
          <li><a href="/Cards"> <LiaShoppingCartSolid /></a></li>
          <li><a href="/Cards"> <RiUploadCloudLine /></a></li>
          <li className={styles.menu}  onClick={handleMenuClick}> <TfiMenu /></li>
      </ul>
    </nav>
  )
}

export default NavbarComponents