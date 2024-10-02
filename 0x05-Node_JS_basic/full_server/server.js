import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245; // Define the port
const hostname = '127.0.0.1'; // Define the hostname (localhost)

// Use the routes from the routes file
app.use('/', routes);

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

export default app;
