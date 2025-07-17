import React, { useState } from 'react';
import style from './SignUp.module.css';
import pills from '../../assets/pills.png'; // adjust path as needed
import axios from 'axios';


const SignUp = () => {


  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post ('http://localhost:5000/signUp', {firstname,lastname,email,password })
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  }


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
           
            onChange={(e) => setFirstName(e.target.value)}
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
             onChange={(e) => setLastName(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            className={style.input}
            placeholder=" "
          />
          <span>Password</span>
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
