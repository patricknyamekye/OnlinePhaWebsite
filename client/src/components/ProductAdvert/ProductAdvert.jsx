import React from 'react'
import styles from './ProductAdvert.module.css';
import bgImage from '../../assets/PdA.png'; // ✅ corrected path


const ProductAdvert = () => {
  return (
    <div className={styles.advertContainer}>
      <div className={styles.wrapper}>

       <div className={styles.imageContainer}>
          <img src={bgImage} alt="product" />
        </div>
        <div className={styles.PdAText}>
          <span className={styles.label}>FOR WOMEN</span>
          <h1>All Natural Promotes <br /> Focus and Memory</h1>
          <button>Shop Now</button>
        </div>

       
      </div>
    </div>
  );
};

export default ProductAdvert;
