import Styles from './Contact.module.css';
import axios from 'axios';
import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', {
        name: formData.name,
        email: formData.email,
        subject: `Contact Form Message from ${formData.name} (${formData.contact})`,
        message: formData.message,
      });
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', contact: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className={Styles.ContsMain}>
      <div className={Styles.contactsRap}>
        <form className={Styles.contactForm} onSubmit={handleSubmit}>
          <div className={Styles.Heading}>
            <h1>Contact us</h1>
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="contact">Contact</label>
            <input
              type="number"
              id="contact"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={Styles.formGroup}>
            <button type="submit" className={Styles.submitButton}>
              Send Message
            </button>
          </div>
          {status && <div>{status}</div>}
        </form>
      </div>
    </div>
  );
};

export default Contacts;
