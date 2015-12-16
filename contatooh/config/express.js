// config/express.js
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser')

module.exports = function(){
	var app = express();

	// environment variable
	app.set('port', 3000);

	// middleware
	app.use(express.static('./public'));

	// routes, environment variable after middleware
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// middleware for http protocol (put and delete) --> parse application/x-www-form-urlencoded 
	app.use(bodyParser.urlencoded({ extended: true }))
	// parse application/json 
	app.use(bodyParser.json())

	app.use(require('method-override')());

	// load routes (express-load)
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
}