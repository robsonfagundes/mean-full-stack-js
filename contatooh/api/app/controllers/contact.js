"use strict";

//express-load
module.exports = function(app) {
	
	var Contact =  app.models.contact;
	var controller = {};
	
	// list all contacts
	controller.listContacts = function(req, res) {
		Contact.find().populate('emergency').exec()
			.then(
				function(contacts) {
					res.json(contacts);
					console.log('mean-full-stack-js: API list all: Contacts')
				}, 
				function(erro) {
					res.status(500).json(erro);
					console.error(erro);
				}
			);
	};	

	// get contact by field
	controller.getContact = function(req, res) {
		var _id = req.params.id;
		Contact.findById(_id).exec()
		.then(
				function(contact) {
					if(!contact) throw new Error('mean-full-stack-js: API Contact not found!');
					res.json(contact);
				}, 
				function(erro) {
					res.status(404).json(erro);
					console.error(erro);
				}
			);
	};

	// add new contact
	controller.saveContact = function(req, res) {

	var _id = req.body._id;
	req.body.emergency = req.body.emergency || null;

	if(_id) {
		Contact.findByIdAndUpdate(_id, req.body).exec()
		.then(
			function(contact) {
				res.json(contact);
			}, 
			function(erro) {
				console.error(erro)
				res.status(500).json(erro);
			}
		);
	} else {	
		Contact.create(req.body)
			.then(
				function(contact) {
			 		res.status(201).json(contact);
				}, 
				function(erro) {
			  		console.log(erro);
			  		res.status(500).json(erro);
				}
			);
		}
	};
	
	// remove by id
		controller.removeContact = function(req, res) {
		var _id = req.params.id;
		Contact.remove({'_id' : _id}).exec()
		.then(
				function() {
					res.status(204).end();
					console.log('mean-full-stack-js: API remove contact: ' + _id)
				}, 
				function(erro) {
					return console.error(erro);
				}
			);
		
	};

	
	// return controller
	return controller;
};
