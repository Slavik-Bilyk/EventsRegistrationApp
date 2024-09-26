import React from 'react'
import { Routes, Route} from 'react-router-dom'
import EventsPage from '../pages/EventsPage/EventsPage'
import EventRegistrationPage from '../pages/EventRegistrationPage/EventRegistrationPage'
import EventParticipantsPage from '../pages/EventParticipantsPage/EventParticipantsPage'
import Layout from './Layout/Layout'

const App = () => {
  return (
    <>
    <Layout/>
      <Routes>
        <Route index element={<EventsPage/>} /> 
        <Route path='registration' element={<EventRegistrationPage />} />
        <Route path='participants' element={<EventParticipantsPage />} />
      </Routes>
    </>
  );
}

export default App;
