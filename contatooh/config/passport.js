'use strict'

var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: 'd498ae6c2c14ef2d8063',
		clientSecret: '80881276c07c8ecbb3b5c0fb976c07ea5a03491e', 
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, 
	
	function(acessToken, refreshToken, profile, done) {
		
		Usuario.findOrCreate(
			{'login': profile.username},
			{'name': profile.username},
			function(erro, usuario) {
				if(erro){
 					console.log(erro);
 					return done(erro);
				}
				return done(null, usuario);
			}
		);

	}));

	// Serialize ObjectID
	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});

	// DeserializeUser ObjectID
	passport.deserializeUser(function(id, done) {
		Usuario.findById(id).exec()
		.then(function(usuario) {
			done(null, usuario);
		});
	});

};