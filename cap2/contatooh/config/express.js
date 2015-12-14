// config/express.js
var express = require('express');
var load = require('express-load');

module.exports = function(){
	var app = express();

	// environment variable
	app.set('port', 3000);

	// middleware
	app.use(express.static('./public'));

	// routes, environment variable after middleware
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// express-load
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
}