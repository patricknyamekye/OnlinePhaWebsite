import React, { useState } from 'react';
import style from './SignUp.module.css';
import pills from '../../assets/pills.png'; // adjust path as needed

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Your submit logic here
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
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className={style.input}
              placeholder=" "
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              required
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className={style.input}
              placeholder=" "
            />
            <span>Lastname</span>
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

        <label>
          <input
            required
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={style.input}
            placeholder=" "
          />
          <span>Confirm password</span>
        </label>

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
