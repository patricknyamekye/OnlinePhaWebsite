import React, { useState } from 'react';
import style from './SignUp.module.css';
import pills from '../../assets/pills.png'; // adjust path as needed
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
 const [formData, setFormData] = useState({
      fullName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      console.log(response.data);
      // Save user info to localStorage (if needed)
      // localStorage.setItem('user', JSON.stringify(response.data.user));
      // Navigate to the home page
      navigate('/login');
    } catch (err) {
      setError('Failed to sign up. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className={style.page}>
      {/* Blurred background */}
      <div
        className={style.background}
        style={{ backgroundImage: `url(${pills})` }}
      />

      {/* Form */}
      <form className={style.form} onSubmit={handleSubmit}>
        <p className={style.title}>Register</p>
        <p className={style.message}>Signup now and get full access to our app.</p>

        <div className={style.flex}>
          <label>
            <input
              required
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={style.input}
              placeholder=" "
            />
            <span>Full Name</span>
          </label>
        </div>

        <label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={style.input}
            placeholder=" "
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={style.input}
            placeholder=" "
          />
          <span>Password</span>
        </label>

        {/* Show error message if present */}
        {error && <div className={style.error}>{error}</div>}

        <button type="submit" className={style.submit}>
          Submit
        </button>
        <p className={style.signin}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
