const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header toplain text
  res.setHeader('Content-Type', 'text/plain');
  // Send the response text
  res.end('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245);

// Export the server
module.exports = app;
