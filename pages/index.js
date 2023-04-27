import { useState } from 'react';
import Layout from './layout';
import styles from '../styles/index.module.css';

function HomePage() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <Layout>
      <h1 className={styles.title}>Isabelle Ibrahimsson</h1>
      <p className={styles.subtitle}>Frontend Devoloper</p>
      <button className={styles.btn} onClick={handleShowForm}>
        Contact Me
      </button>
      {showForm && (
        <div className={styles.formContainer}>
          <div className={styles.formBackground}></div>
          <div className={styles.formContent}>
            <button className={styles.closeButton} onClick={handleCloseForm}>
              X
            </button>
            <h2>Contact Me</h2>
            <form className={styles.form}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
              <button className={styles.submitButton} type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default HomePage;
