var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function(){
	console.log('mean-full-stack-js: Node and Express server listen on port ' + app.get("port"));
});
