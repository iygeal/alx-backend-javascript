const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// New endpoint for /available_payments
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// Update the /login route to handle missing userName and content type validation
app.post('/login', (req, res) => {
  if (!req.is('application/json')) {
    return res.status(400).send('Invalid content type');
  }

  const username = req.body.userName;
  if (!username) {
    return res.status(400).send('Missing userName');
  }

  res.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
