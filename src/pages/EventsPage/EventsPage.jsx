import React, { useEffect, useState } from 'react';
import EventsCard from '../../components/EventsCard/EventsCard'; 
import styles from './EventsPage.module.css';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = () => {
      fetch('http://localhost:3000/api/events')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setEvents(data))
        .catch((error) => console.error('Error fetching events:', error));
    };
    console.log(events);

    fetchEvents(); 
  }, []);


  return (
    <div className={styles.container}>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
         <div>
          <h1>{event.name}</h1>
          <h1>{event.date}</h1>
         </div>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
