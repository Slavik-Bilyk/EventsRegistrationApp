import React, { useEffect, useState } from 'react';
import EventsCard from '../../components/EventsCard/EventsCard'
import styles from './EventsPage.module.css'

const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    const fetchEvents = async () => {
        try {
            
            const response = await fetch('http://localhost:3000/api/events');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setEvents(data);
        } catch (err) {
            setError(err.message);
            console.error('Error fetching events:', err);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Events</h1>

            <div className={styles.container}>
                
                <EventsCard events={events}/>
            </div>
        </div>
    );
};

export default EventsPage;