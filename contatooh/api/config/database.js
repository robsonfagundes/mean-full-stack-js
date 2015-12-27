'use strict'

var mongoose = require("mongoose");
 
module.exports = function(uri) {

	// debbuger
	mongoose.set('debug', true);

	// pool X connction
	mongoose.connect(uri, {server: {poolSize: 5}});

	// manager connection
	mongoose.connection.on('connected', function() {
		console.log('mean-full-stack-js - Mongoose: Conected on: ' + uri);
	});
	mongoose.connection.on('disconnected', function() {
		console.log('mean-full-stack-js - Mongoose: Disconected at: ' + uri);
	});
	mongoose.connection.on('error', function(error) {
		console.log('mean-full-stack-js - Mongoose: Error connection: ' + error);
	});

	// close connection
	process.on('SIGINT', function() {
		mongoose.connection.close(function () {
			console.log('mean-full-stack-js - Mongoose: Disconected  by the end of application')
			process.exit(0);
		});
	});
};