'use strict'

var mongoose = require("mongoose");
 
module.exports = function(uri) {

	// debbuger
	mongoose.set('debug', true);

	// pool 10 connction
	mongoose.connect(uri, {server: {poolSize: 10}});

	// manager connection
	mongoose.connection.on('connected', function() {
		console.log('Mongoose: Conected on: ' + uri);
	});
	mongoose.connection.on('disconnected', function() {
		console.log('Mongoose: Disconected at: ' + uri);
	});
	mongoose.connection.on('error', function(error) {
		console.log('Mongoose: Error connection: ' + error);
	});

	// close connection
	process.on('SIGINT', function() {
		mongoose.connection.close(function () {
			console.log('Mongoose: Disconected  by the end of application')
			process.exit(0);
		});
	});
};