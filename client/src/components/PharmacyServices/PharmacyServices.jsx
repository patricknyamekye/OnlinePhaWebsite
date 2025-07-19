
import style from './PharmacyServices.module.css';
import bgImage from '../../assets/PdA.png';

const PharmacyServices = () => {
  return (
    <div className={style.container}>
      {/* Left: Image */}
      <div className={style.imageWrapper}>
        <img
          src= {bgImage}
          alt="Pharmacy Services"
          className={style.image}
        />
      </div>

      {/* Right: Services */}
      <div className={style.card}>
        <h2 className={style.title}>Pharmacy Services</h2>
        <p className={style.description}>
          Visit any of our branches and receive appropriate care specific to your health needs.
          Begin by selecting the service(s) you require, and we will assist you.
        </p>

        <div className={style.services}>
          <div>
            <p>24hrs Pharmaceutical Services</p>
            <p>Basic Diagnostic Services</p>
            <p>Weight Management Services</p>
            <p>Counselling Services</p>
          </div>
          <div>
            <p>Home & Office Delivery Services</p>
            <p>Medication Therapy Management</p>
            <p>Cosmetology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyServices;
