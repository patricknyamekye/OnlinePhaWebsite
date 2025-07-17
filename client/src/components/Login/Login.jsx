// src/components/LoginComponent/Login.jsx
import React from 'react';
import styles from './Login.module.css';
import bgImage from '../../assets/pills.png'; 
import { Link } from 'react-router-dom';


const Login = () => {

  
  return (
    <div className={styles.page} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.overlay}>
        <form className={styles.form_container}>
       
          <div className={styles.title_container}>
            <p className={styles.title}>Login to your Account</p>
            <span className={styles.subtitle}>
              Get started with our app, just create an account and enjoy the experience.
            </span>
          </div>

          <div className={styles.input_container}>
            <label className={styles.input_label} htmlFor="email_field">Email</label>
            <input
              placeholder="name@mail.com"
              type="email"
              className={styles.input_field}
              id="email_field"
            />
          </div>

          <div className={styles.input_container}>
            <label className={styles.input_label} htmlFor="password_field">Password</label>
            <input
              placeholder="Password"
              type="password"
              className={styles.input_field}
              id="password_field"
            />
          </div>

          <button type="submit" className={styles.sign_in_btn}>
            <span>Login</span>
          </button>

          <div className={styles.separator}>
            <hr className={styles.line} />
            <span>Or</span>
            <hr className={styles.line} />
          </div>

            <Link to="/signup" className={styles.sign_in_ggl}>
           <span>SignUp</span>
            </Link>


       

        
        </form>
      </div>
    </div>
  );
};

export default Login;
