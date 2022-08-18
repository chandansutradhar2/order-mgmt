var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello Chandan!');
}).listen(3000);

console.log('after server has started spawning')