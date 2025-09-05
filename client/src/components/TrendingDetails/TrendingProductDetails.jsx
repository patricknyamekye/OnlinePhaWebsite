import React, { useEffect, useState } from 'react';
import PdA from '../../assets/PdA.png';
import styles from './ProductDetails.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'


const dummyProducts = [
  {
    id: 1,
    title: 'Vichy Capital Soleil SPF50 Tan Illumi...',
    price: 1850.00,
    image: PdA,
    available: true,
    description:'hello world'
  },
  {
    id: 2,
    title: 'Neutrogena Hydro Boost Fluid SPF50 Hy...',
    price: 650.00,
    image: PdA,
    available: true, 
    description:'hello world'
  },
  {
    id: 3,
    title: 'Braes The Blurring Gloss Bomb Lip Gloss',
    price: 450.00,
    image: PdA,
    available: true,
     description:'hello world'
  },
  {
    id: 4,
    title: 'Catrice Kiss & Glow Blusher Stick - 18gm',
    price: 785.00,
    image: PdA,
    available: true,
     description:'hello world'
  },
  {
    id: 5,
    title: 'Weleda Pomegranate & Maca Peptides Fi...',
    price: 1250.00,
    image: PdA,
    available: true,
     description:'hello world'
  },
];

const TrendingProductDetails = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user ? user._id : null

  console.log(prodId)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/get-product/${prodId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [prodId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleCheckOut = () => {
    if (userId === null) {
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
      // Pass product details in state
      navigate(`/checkout/${userId}`, { state: { cart: [{ ...product, quantity: 1 }] } });
    }
    
  }

  if (!product) return <p>Product not found.</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.title}</h1>
      <img src={`http://localhost:5000/uploads/${product.productImg}`} alt={product.name} className={styles.image} />
                      <p className={styles.productTitle}>{product.name}</p>
      <p className={styles.description}>{product.description || 'No description available.'}</p>
      <p className={styles.price}>{product.price}</p>
      <div className={styles.buttonGroup}>
        <button onClick={handleCheckOut} className={`${styles.button} ${styles.buyButton}`}>Buy Now</button>

   {/* <button
  className={`${styles.button} ${styles.cartButton}`}
>
  Add to Cart
</button> */}

      </div>
    </div>
  );
};

export default TrendingProductDetails;
