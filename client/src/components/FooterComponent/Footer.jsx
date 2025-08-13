import { Link } from 'react-router-dom';


import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.infoSection}>
        <div>
          <h4>FAST & FREE SHIPPING</h4>
          <p>
            Get your order delivered same day or next day according to your location in Cairo & Giza. 
            We also offer Bloom super saver delivery within 2-3 business days in Cairo & Giza. 
            In other locations you will receive your order within 2-7 business days.
          </p>
        </div>
        <div>
          <h4>DISCOUNTS & OFFERS</h4>
          <p>
            Bloom keeps running different promotions on its website and stores where you can benefit 
            from discounts being offered on a wide variety of items. The discount may be applied automatically 
            or a coupon code may have to be used.
          </p>
        </div>
        <div>
          <h4>SECURE SHOPPING</h4>
          <p>
            We use industry-standard encryption systems for sensitive information like your name, address, and 
            credit/debit card details. Data passed between your computer and our website is secure.
          </p>
        </div>
        <div>
          <h4>CUSTOMER SUPPORT</h4>
          <p>
            We're here to help. Contact us at <br />
            <strong>customersupport@bloompharmacy.com</strong><br />
            or call <strong>01026562982</strong> (from 10am to 6pm).
          </p>
        </div>
      </div>

{/* <div className={Styles.nav}>
  <ul className={Styles.linkList}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/product">Product</Link></li>
    <li><Link to="/contact-us">Contact</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>
</div> */}



      <div className={Styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} WellCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
