(function() {
    'use strict';

    angular
        .module('contatooh')
    	.controller('ContatosController',

    		function($resource, $routeParams, $scope) {
    		
	    		// fields	
	    		$scope.contacts = [];
	    		$scope.filter = '';
	    		$scope.msg = {text: ''};
				
				// resource REST endpoints
				var Contact = $resource('/contatos/:id');

				// new contact and get by ID
				if($routeParams.contatoId){
					Contact.get({id: $routeParams.contatoId},
					function(contato) {
						$scope.contact = contato;
					},
					function(erro) {
						$scope.msg = {text: 'Do not is possible get the contact!'};
						console.log(erro);
					}
				);
				} else {
					$scope.contact = {}
				}

		
				// lista all contacts
				function getContacts() {
					Contact.query(
						function(contatos) {
							$scope.contacts = contatos;
							$scope.msg = {};		
						},
						function(erro){
							$scope.msg = {text: 'Do not is possible get an list of contacts!'};
							console.log(erro);
						}
					);
				}

				// remove contact
				$scope.remove = function(contact) {
					Contact.delete({id: contact._id},
						getContacts,
						function(erro) {
							$scope.msg = {text: 'Do not is possible remove contact of list!'};
							console.log(erro);
						}
					);
				};


				// init controller
				$scope.init = function() {
					getContacts();
				};
				$scope.init();
    	});




})();