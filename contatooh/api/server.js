var http = require('http');
var app = require('./config/express')();

require('./config/database.js')('mongodb://127.0.0.1/contatooh');

http.createServer(app).listen(app.get('port'), function(){
	console.log('mean-full-stack-js: Node and Express server listen on port ' + app.get("port"));
});
