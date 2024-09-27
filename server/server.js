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
  return res.json(events); 
});

app.post('/api/events', (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  res.status(201).json(newEvent);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Щось пішло не так!'); 
});

app.listen(3000, () => {
    
});
