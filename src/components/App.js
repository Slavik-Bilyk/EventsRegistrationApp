import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventsPage from '../pages/EventsPage/EventsPage'; // Ваша головна сторінка
import EventRegistrationPage from '../pages/EventRegistrationPage/EventRegistrationPage';
import EventParticipantsPage from '../pages/EventParticipantsPage/EventParticipantsPage';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EventsPage />} index /> 
      
      <Route element={<Layout />}> 
        <Route path='/registration' element={<EventRegistrationPage />} />
        <Route path='/events/:id' element={<EventParticipantsPage />} />
      </Route>
      
    </Routes>
  );
};

export default App;
