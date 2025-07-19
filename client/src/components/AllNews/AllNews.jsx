import React from 'react';
import styles from './AllNews.module.css';
import bgImage from '../../assets/PdA.png';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    image: bgImage,
    category: "Uncategorized",
    title: "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
    date: "March 2, 2022",
    author: "Admin",
  },
  {
    id: 2,
    image: bgImage,
    category: "Uncategorized",
    title: "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
    date: "March 2, 2022",
    author: "Admin",
  },
  {
    id: 3,
    image: bgImage,
    category: "Uncategorized",
    title: "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
    date: "March 2, 2022",
    author: "Admin",
  },
  {
    id: 4,
    image: bgImage,
    category: "Uncategorized",
    title: "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
    date: "March 2, 2022",
    author: "Admin",
  },
  {
    id: 5,
    image: bgImage,
    category: "Daily Life, Physical Sciences",
    title: "Trading in My Classic Sweaters for Cut Outs 2022",
    date: "February 2, 2022",
    author: "Admin",
  },
  {
    id: 6,
    image: bgImage,
    category: "Medicine, Physical Sciences",
    title: "Using diffusion-weighted MRI scans to detect silent brain injury following open-heart valve...",
    date: "February 2, 2022",
    author: "Admin",
  },
];

const AllNews = () => {
  return (
    <section className={styles.allNews}>
      <h2 className={styles.pageTitle}>All News Articles</h2>
      <div className={styles.cardsContainer}>
        {articles.map((article) => (
          <Link to={`/newsDetails/${article.id}`} key={article.id} className={styles.cardLink}>
            <div className={styles.card}>
              <img src={article.image} alt={article.title} />
              <span className={styles.category}>{article.category}</span>
              <p className={styles.meta}>{article.date} / {article.author}</p>
              <h3 className={styles.title}>{article.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllNews;
