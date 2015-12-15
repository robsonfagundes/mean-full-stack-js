var contatos = [
	{_id: 1, nome: 'robson fagundes', email: 'robsonfagundes@gmail.com'},
	{_id: 1, nome: 'ana paula soares fagundes', email: 'anapaulasoares@gmail.com'},
	{_id: 1, nome: 'alice soares fagundes', email: 'alice@gmail.com'},
	{_id: 1, nome: 'helena soares fagundes', email: 'helena@gmail.com'},
	{_id: 1, nome: 'robson junior soares fagundes', email: 'robsonfagundesjr@gmail.com'}
];

//express-load
module.exports = function() {
	
	var controller = {};
		
	// list all
	controller.listaContatos = function(req, res) {
		res.json(contatos);
	}
	return controller;

	// list by field
	controller.obtemContato = function(req, res) {
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato) {
			return contato._id == idContato;
		}) [0];
		contato ? 
			res.json(contato) : 
			res.status(404).send('Contato não encontrado!');
	};
	
}


