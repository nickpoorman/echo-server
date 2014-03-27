var http = require('http');

var server = http.createServer(function(req, res) {
  res.end('beep boop\r\n');
  console.log("beep boop");
});

server.listen(process.env.PORT);
