import { useParams } from 'react-router-dom';
import PdA from '../../assets/PdA.png';
import styles from './ProductDetails.module.css';

const dummyProducts = [
  {
    id: 1,
    title: 'Vichy Capital Soleil SPF50 Tan Illumi...',
    price: 'EGP 1,850.00',
    image: PdA,
    available: true,
    description:'hello world'
  },
  {
    id: 2,
    title: 'Neutrogena Hydro Boost Fluid SPF50 Hy...',
    price: 'EGP 650.00',
    image: PdA,
    available: true, 
    description:'hello world'
  },
  {
    id: 3,
    title: 'Braes The Blurring Gloss Bomb Lip Gloss',
    price: 'EGP 450.00',
    image: PdA,
    available: true,
     description:'hello world'
  },
  {
    id: 4,
    title: 'Catrice Kiss & Glow Blusher Stick - 18gm',
    price: 'EGP 785.00',
    image: PdA,
    available: true,
     description:'hello world'
  },
  {
    id: 5,
    title: 'Weleda Pomegranate & Maca Peptides Fi...',
    price: 'EGP 1,250.00',
    image: PdA,
    available: true,
     description:'hello world'
  },
];

const TrendingProductDetails = () => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.title}</h1>
      <img src={product.image} alt={product.title} className={styles.image} />
      <p className={styles.description}>{product.description || 'No description available.'}</p>
      <p className={styles.price}>{product.price}</p>
      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.buyButton}`}>Buy Now</button>
        <button className={`${styles.button} ${styles.cartButton}`}>Add to Cart</button>
      </div>
    </div>
  );
};

export default TrendingProductDetails;
