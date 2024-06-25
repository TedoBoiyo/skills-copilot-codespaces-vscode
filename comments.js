// Create web server
// Create a web server that listens to incoming requests and sends back responses.
// The server should listen to requests on port 3000.
// When a GET request is made to the route /comments, the server should send back the contents of the comments.json file.
// Use the fs module to read from the comments.json file.
// Use the JSON.parse() method to convert the contents of the file to a JavaScript object.
// Respond with the contents of the file.
// If there is an error reading the file, respond with a 500 status code.
// If the route is not found, respond with a 404 status code.

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});