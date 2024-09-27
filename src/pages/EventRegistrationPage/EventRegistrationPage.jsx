import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import styles from './EventRegistrationPage.module.css';

const EventRegistrationPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthday: '',
    source: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'radio') {
      setFormData((prevData) => ({
        ...prevData,
        source: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, birthday } = formData; 
    const newUser = {
      fullname: name,
      email,
      birthday,
      eventId: id, 
    };

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error registering user');
      }

      const data = await response.json();
      console.log(data);
      navigate(`/events/${id}`); 
      setFormData({
        name: '',
        email: '',
        birthday: '',
        source: '',
      });

    } catch (error) {
      console.error('Error:', error);
      alert(`Не вдалося зареєструвати користувача. Причина: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Event Registration</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Full Name:
          <input
            id="name"
            name="name"
            type="text"
            required
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email" className={styles.label}>
          Email:
          <input
            id="email"
            name="email"
            type="email"
            required
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="birthday" className={styles.label}>
          Birthday:
          <input
            id="birthday"
            name="birthday"
            type="date"
            required
            className={styles.input}
            value={formData.birthday}
            onChange={handleChange}
          />
        </label>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Where did you hear about this event?</legend>
          <label className={styles.checkboxLabel}>
            <input
              className={styles.checkboxInput}
              type="radio"
              name="source"
              value="social_media"
              onChange={handleChange}
            />
            Social Media
          </label>
          <label className={styles.checkboxLabel}>
            <input
              className={styles.checkboxInput}
              type="radio"
              name="source"
              value="friends"
              onChange={handleChange}
            />
            Friends
          </label>
          <label className={styles.checkboxLabel}>
            <input
              className={styles.checkboxInput}
              type="radio"
              name="source"
              value="newsletter"
              onChange={handleChange}
            />
            Newsletter
          </label>
        </fieldset>
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default EventRegistrationPage;
