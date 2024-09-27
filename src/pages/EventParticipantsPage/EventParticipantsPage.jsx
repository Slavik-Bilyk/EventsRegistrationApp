import React from 'react'
import styles from './EventParticipantsPage.module.css'

const EventParticipantsPage = () => {



  
  return (
    <div>
     <h1>"Art Exhibition" participants</h1>
     <div className={styles.blockFilter}>
        <h2>Filters: </h2>
        <form className={styles.form}>
            <label className={styles.label}>
                Full name
                <input className={styles.input}/>
            </label>
            
            <label className={styles.label}>
                email
                <input className={styles.input}/>
            </label>

            <button type='submit' className={styles.button}>Reset fillters</button>
        </form>
     </div>
    </div>
  )
}

export default EventParticipantsPage
