import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PdA from '../../assets/PdA.png';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from './Trending.module.css';

const products = [
  {
    id: 1,
    title: 'Vichy Capital Soleil SPF50 Tan Illumi...',
    price: 'EGP 1,850.00',
    image: PdA,
    available: true,
  },
  {
    id: 2,
    title: 'Neutrogena Hydro Boost Fluid SPF50 Hy...',
    price: 'EGP 650.00',
    image: PdA,
    available: true,
  },
  {
    id: 3,
    title: 'Braes The Blurring Gloss Bomb Lip Gloss',
    price: 'EGP 450.00',
    image: PdA,
    available: true,
  },
  {
    id: 4,
    title: 'Catrice Kiss & Glow Blusher Stick - 18gm',
    price: 'EGP 785.00',
    image: PdA,
    available: true,
  },
  {
    id: 5,
    title: 'Weleda Pomegranate & Maca Peptides Fi...',
    price: 'EGP 1,250.00',
    image: PdA,
    available: true,
  },
];

const TrendingProduct = () => {
  return (
    <section className={styles.trendingSection}>
      <h2 className={styles.trendingTitle}>Trending Product</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={`/product/${product.id}`} className={styles.linkWrapper}>
              <div className={styles.productCard}>
                <img src={product.image} alt={product.title} className={styles.productImage} />
                <p className={styles.productTitle}>{product.title}</p>
                <p className={styles.productPrice}>{product.price}</p>
                <div className={styles.buttonGroup}>
                  <button className={styles.buyNowButton}>BUY NOW</button>
                  <button className={styles.addToCartButton}>ADD TO CART</button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingProduct;
