const express = require('express');
const app = express();

// Route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Listen on port 7865
const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
