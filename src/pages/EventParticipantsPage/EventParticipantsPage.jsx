import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './EventParticipantsPage.module.css'; 

const EventsPage = () => {
  const { id } = useParams();  
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/events/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event details');
        }
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading event details...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.eventsPage}>
      <h1>{event.name}</h1>
      <div className={styles.block}>
        <h2>Filters:</h2>
        <form className={styles.form}>
          <label className={styles.label}>
            Full Name
            <input type="text" name="fullName" className={styles.input} />
          </label>
          <label className={styles.label}>
            Email
            <input type="email" name="email" className={styles.input} />
          </label>
          <button type="button" className={styles.button}>Reset Filters</button>
        </form>
        
        {event.users && event.users.length > 0 ? (
          <div className={styles.participantsList}>
          {event.users.map((user) => (
            <div key={user.id} className={styles.user}>
            <h2>{user.fullname}</h2>
            <p>{user.email}</p>
            </div>
          ))}
          </div>
          ) : (
        <p>No participants registered for this event yet.</p>
            )}
      </div>
    </div>
  );
};

export default EventsPage;
