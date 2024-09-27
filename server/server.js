const express = require('express');
const cors = require('cors');
const { events } = require('./events'); 
const app = express();
const PORT = process.env.PORT || 3000; 
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get('/api/events', (req, res) => {
  console.log('Запит на /api/events отримано');
  res.json(events);
});

const users = [];

app.post('/api/register', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id, 10); 
  const event = events.find(ev => ev.id === eventId); 

  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Щось пішло не так!'); 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
