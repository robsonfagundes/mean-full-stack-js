(function() {
    'use strict';

    angular
        .module('contatooh')
    	.controller('ContatosController',

    		function(Contact, $scope) {
    		
	    		// obj	
	    		$scope.contacts = [];
	    		$scope.filter = '';
	    		$scope.msg = {text: ''};
				
				// lista all contacts
				function getContacts() {
					Contact.query(
						function(contatos) {
							$scope.contacts = contatos;
							$scope.msg = {};		
						},
						function(error){
							$scope.msg = {text: 'Do not is possible get an list of contacts!'};
							console.log(error);
						}
					);
				}


				// remove contact
				$scope.remove = function(contact) {
					console.log(contact.name);
					Contact.delete({id: contact._id},
						getContacts(),
						function(error) {
							$scope.msg = {text: 'Do not is possible remove contact of list!'};
							console.log(error);
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