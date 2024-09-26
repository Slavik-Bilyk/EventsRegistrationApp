import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './EventsCard.module.css'

const EventsCard = ({events}) => {
  return (
    <div className={styles.bg}>

        {events.map((event) => (
        <div className={styles.cardBlock}>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>Organizer: {event.organizer}</p>
           <div className={styles.nav}>
                <NavLink to='participants'>View</NavLink>
                <NavLink to='registration'>Register</NavLink>
           </div>
        </div>
      ))}

    </div>
  )
}

export default EventsCard
