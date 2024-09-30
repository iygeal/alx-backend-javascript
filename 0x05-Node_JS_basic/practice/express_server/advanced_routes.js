const express = require('express');

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

const usersRouter = require('./users');
// Use the users router for any routes that start with /users
app.use('/users', usersRouter);

// GET request
app.get('/', (req, res) => {
  res.send('Hello, this is a GET request!');
});

// POST request
app.post('/', (req, res) => {
  res.send('Hello, this is a POST request!');
});

// PUT request
app.put('/', (req, res) => {
  res.send('Hello, this is a PUT request!');
});

// DELETE request
app.delete('/', (req, res) => {
  res.send('Hello, this is a DELETE request!');
});

// Define a route with a dynamic parameter (:name)
app.get('/hello/:name', (req, res) => {
  const name = req.params.name; // Extract the name route parameter
  res.send(`Hello, ${name}!`);
});

// Handle request with ? symbol
app.get('/search', (req, res) => {
  const term = req.query.term; // Extract the query parameter
  res.send(`You searched for: ${term}`);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Express server running at http://127.0.0.1:3000');
});
