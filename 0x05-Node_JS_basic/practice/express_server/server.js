const express = require('express');
const app = express();

// Define a route for the root URL

app.get('/', (req, res) => {
  res.send('Hello, ExpressJS!');
});

// Define route for /about
app.get('/about', (req, res) => {
  res.send('This is the about page');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000');
});
