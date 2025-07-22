const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});