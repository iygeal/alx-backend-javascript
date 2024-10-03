const express = require('express');
const app = express();

const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for /cart/:id
app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// If id is not a number, return 404
app.get('/cart/:id', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
