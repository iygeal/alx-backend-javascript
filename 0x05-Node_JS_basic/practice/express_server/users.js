const express = require('express');
const router = express.Router();

// Define routes for users
router.get('/', (req, res) => {
  res.send('User List');
});

router.get('/:id', (req, res) => {
  res.send(`User with ID: ${req.params.id}`);
});

module.exports = router;