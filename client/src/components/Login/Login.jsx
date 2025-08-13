import React, {useState} from 'react';
import styles from './Login.module.css';
import bgImage from '../../assets/pills.png'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response =""

    try {
      response = await axios.post("http://localhost:5000/api/login", { email, password });
      console.log(response)

      if (response && response.data && response.data.user && response.data.user.email) {
        localStorage.setItem('user', JSON.stringify( response.data.user ));
        if (response.data.user.role === 'user'){
        navigate("/");
        }else {
          navigate("/admin/dashboard");
        }
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: "Login failed. Invalid response from server.",
        });
     
      }
    } catch (error) {
      console.error("Error logging in:", error);
      if (error) {
        await Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.response.data.error,
        });
      }
     
    }
  };
  
  return (
    <div className={styles.page} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.overlay}>

        <form onSubmit={handleSubmit} className={styles.form_container} >
       
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
              required
              type="email"
              name='email'
              onChange={(e) => setEmail(e.target.value)}
           
              className={styles.input_field}
              id="email_field"
            />
          </div>

          <div className={styles.input_container}>
            <label className={styles.input_label} htmlFor="password_field">Password</label>
            <input
              placeholder="Password"
              required
              name='password'
              onChange={(e) => setPassword(e.target.value)}
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
}

export default Login;
