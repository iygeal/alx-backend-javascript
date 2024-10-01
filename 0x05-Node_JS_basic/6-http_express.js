const express = require('express');

// create an instance of an Express application
const app = express();

// Define a route for the root endpoint ('/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {});

module.exports = app;
