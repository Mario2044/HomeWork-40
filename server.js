const http = require('http');

const users = [{id: 1, old: 1}, {id: 2, old: 2}, {id: 3, old: 3}, {id: 4, old: 4}];

const server = http.createServer((req, res) => {
  if (req.url === '/users') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

server.listen(8199, () => {
  console.log('Server running at http://localhost:8199/');
});