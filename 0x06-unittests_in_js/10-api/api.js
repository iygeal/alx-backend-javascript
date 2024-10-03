const express = require('express');
const app = express();
app.use(express.json()); // To parse JSON request body

const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint to get available payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// New endpoint to login and welcome the user
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('UserName not provided');
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
