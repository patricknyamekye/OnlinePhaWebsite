
import { useParams } from 'react-router-dom';
import styles from './LatestNewDetails.module.css';
import bgImage from '../../assets/PdA.png';

const NewsDetails = [
  {
    id: 1,
    image: bgImage,
    category: "Uncategorized",
    title: "COVID-19 Structured Summaries...",
    date: "March 2, 2022",
    author: "Admin",
    content: "Full article text for COVID-19 Structured Summaries goes here..."
  },
  {
    id: 2,
    image: bgImage,
    category: "Daily Life",
    title: "Trading in My Classic Sweaters...",
    date: "Feb 2, 2022",
    author: "Admin",
    content: "Full article text for sweater article goes here..."
  },
  {
    id: 3,
    image: bgImage,
    category: "Medicine",
    title: "MRI scans and silent brain injury...",
    date: "Feb 2, 2022",
    author: "Admin",
    content: "Full article text for MRI scans goes here..."
  },
];

const LatestNewDetails = () => {
  const { id } = useParams();
  const article = NewsDetails.find((item) => item.id === parseInt(id));

  if (!article) return <p>News not found.</p>;

  return (
    <div className={styles.detailsContainer}>
      <img src={article.image} alt={article.title} className={styles.image} />
      <h1>{article.title}</h1>
      <p className={styles.meta}>{article.date} / {article.author}</p>
      <p className={styles.category}>{article.category}</p>
      <p className={styles.content}>{article.content}</p>
    </div>
  );
};

export default LatestNewDetails;
