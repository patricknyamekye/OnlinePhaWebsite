import React from 'react'
import styles from './LatestNews.module.css'
import bgImage from '../../assets/PdA.png';



const articles = [
  {
    id: 1,
    image: bgImage,
    category: "Uncategorized",
    title:
      "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
    date: "March 2, 2022",
    author: "Admin",
  },

   {
    id: 1,
    image: bgImage,
    category: "Uncategorized",
    title:
      "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
    date: "March 2, 2022",
    author: "Admin",
  }, {
    id: 1,
    image: bgImage,
    category: "Uncategorized",
    title:
      "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
    date: "March 2, 2022",
    author: "Admin",
  },

   {
    id: 1,
    image: bgImage,
    category: "Uncategorized",
    title:
      "COVID-19 Structured Summaries: Rapid Publication Of Randomised Trial Protocols In BM...",
    date: "March 2, 2022",
    author: "Admin",
  },


  {
    id: 2,
    image: bgImage,
    category: "Daily Life, Physical Sciences",
    title: "Trading in My Classic Sweaters for Cut Outs 2022",
    date: "February 2, 2022",
    author: "Admin",
  },
  {
    id: 3,
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
        <a href="" className={styles.viewAll}>
          View All →
        </a>
      </div>

      <div className={styles.cardsContainer}>
        {articles.map((article) => (
          <div className={styles.card} key={article.id}>
            <img src={article.image} alt={article.title} />
            <span className={styles.category}>{article.category}</span>
            <p className={styles.meta}>
              {article.date} / {article.author}
            </p>
            <h3 className={styles.title}>{article.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
