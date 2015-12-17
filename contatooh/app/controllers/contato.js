"use strict";

var ID_CONTACT_INC = 5;

var contatos = [
		{_id: 1, name: 'robson fagundes', email: 'robsonfagundes@gmail.com'},
		{_id: 2, name: 'ana paula soares fagundes', email: 'anapaulasoares@gmail.com'},
		{_id: 3, name: 'alice soares fagundes', email: 'alice@gmail.com'},
		{_id: 4, name: 'helena soares fagundes', email: 'helena@gmail.com'},
		{_id: 5, name: 'robson junior soares fagundes', email: 'robsonfagundesjr@gmail.com'}
	];

//express-load
module.exports = function() {
	
	var controller = {};
	
	// list all
	controller.listaContatos = function(req, res) {
		res.json(contatos);
	};	

	// get contact por campo
	controller.obtemContato = function(req, res) {
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato) {
			return contato._id == idContato;
		}) [0];
		contato ? res.json(contato) : res.status(404).send('Contato não encontrado!');
	};

	// add novo contato
	controller.salvaContato = function(req, res) {
		var contato = req.body;
		contato = contato._id ? atualiza(contato) :	adiciona(contato);
		res.json(contato);
	};
	
	// remove por id
	controller.removeContato = function(req, res) {
		var idContato = req.params.id;
		contatos = contatos.filter(function(contato) {
			return contato._id != idContato;
		});
		res.status(204).end;
	};

	// contatoNovo
	function adiciona(contatoNovo) {
		contatoNovo._id = ++ID_CONTACT_INC;
		contatos.push(contatoNovo);
		return contatoNovo
	}

	// contatoAleterar
	function atualiza(contatoAleterar) {
		contatos = contatos.map(function(contato) {
			if(contatoNovo._id == contatoAleterar._id) {
				contato = contatoAleterar;
			}
			return contato;
		});
		return contatoAleterar;
	}

	return controller;
};


