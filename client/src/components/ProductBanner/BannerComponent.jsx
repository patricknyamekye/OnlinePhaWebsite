// src/components/BannerComponent/BannerComponent.jsx

import styles from './Banner.module.css'; // Using CSS Module

const BannerComponent = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.bannerTitle}>Products</h1>
    </div>
  );
};

export default BannerComponent;
