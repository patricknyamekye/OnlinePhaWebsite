import React from 'react'
import styles from './LatestNews.module.css'
import bgImage from '../../assets/PdA.png';
import mentalH from '../../assets/mentalH.jpg';
import hm from '../../assets/hm.jpg';
import { Link } from 'react-router-dom';



const articles = [
  {
    id: 1,
    image: mentalH,
    category: "Uncategorized",
    title:
      "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
    date: "March 2, 2022",
    author: "Admin",
  },

   {
    id: 2,
    image: hm,
    category: "Uncategorized",
    title:
      "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
    date: "March 2, 2022",
    author: "Admin",
  }, {
    id: 3,
    image: bgImage,
    category: "Uncategorized",
    title:
      "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
    date: "March 2, 2022",
    author: "Admin",
  },

   {
    id: 4,
    image: bgImage,
    category: "Uncategorized",
    title:
      "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
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
    title:
      "Using diffusion-weighted MRI scans to detect silent brain injury following open-heart valve...",
    date: "February 2, 2022",
    author: "Admin",
  },
];


const LatestNews = () => {
  return (
    <section className={styles.latestNews}>
      <div className={styles.header}>
        <h2>
          <span className={styles.blueT}>T</span>he Latest News
        </h2>
     <Link to="/allnews" className={styles.viewAll}>View All →</Link>
      </div>

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

export default LatestNews;



