"use strict";

//express-load
module.exports = function(app) {
	
	var Contato =  app.models.contato;
	var controller = {};
	
	// list all
	controller.listaContatos = function(req, res) {
		Contato.find().exec()
			.then(
				function(contatos) {
					res.json(contatos);
					console.log('mean-full-stack-js: API list all: Contacts')
				}, 
				function(erro) {
					res.status(500).json(erro);
					console.error(erro);
				}
			);
	};	

	// get contact por campo
	controller.obtemContato = function(req, res) {
		var _id= req.params.id;
		Contato.findById(_id).exec()
		.then(
				function(contato) {
					if(!contato) throw new Error('mean-full-stack-js: API Contact not found!');
					res.json(contato);
				}, 
				function(erro) {
					res.status(404).json(erro);
					console.error(erro);
				}
			);
	};

	// add novo contato
	controller.salvaContato = function(req, res) {
		var _id = req.body._id;
		if(_id) {
			Contato.findByIdAndUpdate(_id, req.body).exec()
			.then(
				function(contato) {
					res.json(contato);
				}, 
				function(erro) {
					res.status(500).json(erro);
					console.error(erro);
				}
			);
		} else {
			Contato.create(req.body)
			.then(
				function(contato) {
					res.status(201).json(contato);
				}, 
				function(erro) {
					res.status(500).json(erro);
					console.error(erro);
				}
			);
		}
	};
	
	// remove por id
	controller.removeContato = function(req, res) {
		var _id = req.params.id;
		Contato.remove({'_id' : _id}).exec()
		.then(
				function() {
					res.status(204).end();
					console.log('mean-full-stack-js: API remove contato: ' + _id)
				}, 
				function(erro) {
					return console.error(erro);
				}
			);
		
	};

	
	// return controller
	return controller;
};
