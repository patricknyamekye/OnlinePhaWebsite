import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import styles from './Trending.module.css';
import Swal from 'sweetalert2';
import axios from 'axios';

const TrendingProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-products');
        if (response) {
          // Filter products where owner field is empty
          const filteredProduct = response.data.products.filter(product => !product.owner);

          setProducts(filteredProduct);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  const handleAddToCart = async (product) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      Swal.fire({
        title: 'You are not logged in!',
        text: 'Please log in to add items to your cart.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Log In',
        cancelButtonText: 'Browse',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    } else {
      try {
        const response = await axios.post('http://localhost:5000/api/add-to-cart', {
          userId: user._id,
          productId: product._id,
        });

        Swal.fire({
          title: 'Added to Cart!',
          text: response.data.message,
          icon: 'success',
        });
      } catch (error) {
        console.error('Error adding to cart:', error);
        Swal.fire({
          title: 'Error',
          text: 'There was a problem adding this item to your cart.',
          icon: 'error',
        });
      }
    }
  };
  return (
    <section className={styles.trendingSection}>
      <h2 className={styles.trendingTitle}>Trending Product</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <div className={styles.linkWrapper}>
              <div className={styles.productCard}>
                <div className={styles.productImg}>
                <img src={`http://localhost:5000/uploads/${product.productImg}`} alt="product"  className={styles.productImage} />
                </div>
                <div className={styles.textContent}>
                <p className={styles.productTitle}>
                  {product.name.length > 15
                    ? `${product.name.substring(0, 15)}...`
                    : product.name}
                </p>
                <p className={styles.productDescription}>
                  {product.description && product.description.length > 30
                    ? `${product.description.substring(0, 30)}...`
                    : product.description}
                </p>
                <p className={styles.productPrice}>{` GH ${product.price}`}</p>
                <div className={styles.buttonGroup}>
                  <button
                    onClick={() => navigate(`/product/${product._id}`)}
                    className={styles.buyNowButton}
                  >
                    BUY NOW
                  </button>
                  <button
                    className={styles.addToCartButton}
                    onClick={() => handleAddToCart(product)}
                  >
                    ADD TO CART
                  </button>
                </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingProduct;