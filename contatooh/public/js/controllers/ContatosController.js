(function() {
    'use strict';

    angular
        .module('contatooh')
    	.controller('ContatosController',

    		function($resource, $scope) {
    		
	    		// fields	
	    		$scope.contacts = [];
	    		$scope.filter = '';
				
				// resource REST endpoints
				var Contact = $resource('/contatos/:id');

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

				$scope.init = function() {
					getContacts();
				};

				$scope.init();
    	});




})();