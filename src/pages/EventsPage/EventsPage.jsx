import React from 'react'
import EventsCard from '../../components/EventsCard/EventsCard'
import styles from './EventsPage.module.css'

const EventsPage = () => {

  const EventsList = [
    {
    name: 'Tech Conference 2024',
    description: 'A conference on the latest in technology.',
    date: '2024-10-15 12:00',
    organizer: 'TechCorp'
    },
    {
      name: 'Tech Conference 2024',
      description: 'A conference on the latest in technology.',
      date: '2024-10-15 12:00',
      organizer: 'TechCorp'
    },
    {
      name: 'Tech Conference 2024',
      description: 'A conference on the latest in technology.',
      date: '2024-10-15 12:00',
      organizer: 'TechCorp'
    },
    {
        name: 'Tech Conference 2024',
        description: 'A conference on the latest in technology.',
        date: '2024-10-15 12:00',
        organizer: 'TechCorp'
    }, 
    {
        name: 'Tech Conference 2024',
        description: 'A conference on the latest in technology.',
        date: '2024-10-15 12:00',
        organizer: 'TechCorp'
    },
    {
          name: 'Tech Conference 2024',
          description: 'A conference on the latest in technology.',
          date: '2024-10-15 12:00',
          organizer: 'TechCorp'
    }
]

  return (
    <div className={styles.container}>
      <h1>Events</h1>
      <EventsCard events={EventsList}/>
    </div>
  )
}

export default EventsPage
