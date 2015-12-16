(function() {
    'use strict';

    angular
        .module('contatooh')
    	.controller('ContatosController',

    		function($resource, $scope) {
    		
	    		// fields	
	    		$scope.contacts = [];
	    		$scope.filter = '';
	    		$scope.msg = {text:''};
				
				// resource REST endpoints
				var Contact = $resource('/contatos/:id');

				// lista all contacts
				function getContacts() {
					Contact.query(
						function(contatos) {
							$scope.contacts = contatos;		
						},
						function(erro){
							console.log('Do not is possible get an list of contacts!');
							console.log(erro);
						}
					);
				}

				$scope.remove = function(contact) {
					Contact.delete({id: contact._id},
						getContacts,
						function(erro) {
							console.log('Do not is possible remove contact of list!');
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