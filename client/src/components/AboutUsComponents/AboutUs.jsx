
import Styles from './AboutUs.module.css';
import aboutAsImg from "../../assets/aboutimg.png";


// const AboutUs = () => {
//   return (
//     <div className={Styles.aboutSection}>
//       <div className={Styles.text}>
//         <h2>Our Mission</h2>
//         <p>
//           Riskified aims to empower your business to unleash ecommerce growth
//           by outsmarting risk. Ecommerce fraud teams play a crucial role in
//           enabling their company’s growth and profitability. To do so, you
//           require an enterprise-grade fraud and risk intelligence solution that
//           can efficiently combat fraud, curb policy abuse, and boost revenue to
//           the max. The problem is, the speed, scale, and sophistication of
//           fraud and abuse can stretch the team and profit margins thin.
//         </p>

//         <p><strong>
//           We believe risk should never keep you from growing your business
//           with confidence.
//         </strong></p>

//         <p>
//           That’s why we don’t just promise great business outcomes—we are
//           accountable for them. As part of the strongest network of merchant
//           brands that rely on our accurate machine learning approach, you can
//           shift fraud chargeback liability and optimize performance according
//           to your risk tolerance and business goals. Instead of feeling
//           uncertain, you gain confidence and an accountable partner to your
//           success. Take risk off the table with Riskified, and put your
//           business on the sure path to growth and profitability.
//         </p>
//       </div>

//       <div className={Styles.imageContainer}>
//         <img src={aboutAsImg} alt="Team working together" />
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



const About = () => {
  return (
    <section className={Styles.aboutSection}>
      <div className={Styles.aboutText}>
        <h2>Our Mission</h2>
        <p>
          Riskified aims to empower your business to unleash ecommerce growth by outsmarting risk. Ecommerce fraud teams play a crucial role in enabling their company’s growth and profitability. To do so, you require an enterprise-grade fraud and risk intelligence solution that can efficiently combat fraud, curb policy abuse, and boost revenue to the max. The problem is, the speed, scale, and sophistication of fraud and abuse can stretch the team and profit margins thin.
        </p>
        <p className={Styles.bold}>
          We believe risk should never keep you from growing your business with confidence.
        </p>
        <p>
          That’s why we don’t just promise great business outcomes—we are accountable for them. As part of the strongest network of merchant brands that rely on our accurate machine learning approach, you can shift fraud chargeback liability and optimize performance according to your risk tolerance and business goals. Instead of feeling uncertain, you gain confidence and an accountable partner to your success. Take risk off the table with Riskified, and put your business on the sure path to growth and profitability.
        </p>
      </div>
      <div className={Styles.aboutImage}>
        <img src={aboutAsImg} alt="Team working together" />
      </div>
    </section>
  );
};

export default About;
