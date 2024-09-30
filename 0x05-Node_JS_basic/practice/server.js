const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response HTTP header with status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url == '/') {
    res.end('Hello, welcome to the homepage!\n');
  } else if (req.url == '/about') {
    res.end('This is the about page.\n')
  } else {
    res.statusCode = 404;
    res.end('404 Not Found\n');
  }
});

// The server listens on port 3000

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
