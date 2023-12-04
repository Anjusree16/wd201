const express = require('express');
const path = require('path');

const app = express();
const port = process.argv[2] || 3000; // Default port 3000 if not provided

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/project', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'project.html'));
});

app.get('/registration', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
