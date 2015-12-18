'use strict'

function verificaAutenticacao(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	} else {
		res.status('401').json('Do not autorized!');
	}
};

module.exports = function(app) {
	
	var controller = app.controllers.contato;

	app.route('/contatos')
		.get(verificaAutenticacao, verificaAutenticacao.listaContatos)
		.post(verificaAutenticacao, verificaAutenticacao.salvaContato);

	app.route('/contatos/:id')
		.get(verificaAutenticacao, controller.obtemContato)
		.delete(verificaAutenticacao, controller.removeContato);
};