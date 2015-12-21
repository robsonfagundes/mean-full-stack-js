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
		},
		emergency: {
			type:  mongoose.Schema.ObjectId,
			require: 'Contact'
		}
	});
	return mongoose.model('Contact', schema);
};