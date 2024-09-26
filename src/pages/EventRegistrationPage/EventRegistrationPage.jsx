import React from 'react';
import styles from './EventRegistrationPage.module.css'

const EventRegistrationPage = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Event Registration</h1>
        <form className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Full Name:
            <input id="name" name="name" type="text" required className={styles.input} />
          </label>
          <label htmlFor="email" className={styles.label}>
            Email:
            <input id="email" name="email" type="email" required className={styles.input} />
          </label>
          <label htmlFor="birthday" className={styles.label}>
            Birthday:
            <input id="birthday" name="birthday" type="date" required className={styles.input} />
          </label>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Where did you hear about this event?</legend>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" name="source" value="social_media" />
              Social Media
            </label>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" name="source" value="friends" />
              Friends
            </label>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" name="source" value="newsletter" />
              Newsletter
            </label>
          </fieldset>
          <button type="submit" className={styles.button}>Register</button>
        </form>
      </div>
    );
  };
  
  export default EventRegistrationPage;
