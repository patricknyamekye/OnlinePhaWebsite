import Styles from './Contact.module.css';

const Contacts = () => {
  return (
    <div className={Styles.ContsMain}>
      <div className={Styles.contactsRap}>
        <form className={Styles.contactForm}>
          <div className={Styles.Heading}>
            <h1>Contact us</h1>
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="contact">Contact</label>
            <input type="number" id="contact" name="contact" required />
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <div className={Styles.formGroup}>
            <button type="submit" className={Styles.submitButton}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
