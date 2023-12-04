const express = require('express');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const app = express();

// Set up the route for /registration to serve registration.html
app.get('/registration', (req, res) => {
  res.sendFile(path.join(__dirname, 'http-server', 'registration.html'));
});

// Serve static files from the http-server folder
app.use(express.static(path.join(__dirname, 'http-server')));

// Define the port using the command line argument or default to 3000
const port = argv.port || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
