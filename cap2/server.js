var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end("I'm a server created in Node.js!\n");
}).listen(3000, 127,0,0,1);