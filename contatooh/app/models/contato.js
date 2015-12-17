'use strict'

var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
		name: {
			type: String,
			require: true
		},
		email: {
			type: String,
			require: true, 
			index: {
				unique: true
			}
		}
	});
	return mongoose.model('Contato', schema);
};