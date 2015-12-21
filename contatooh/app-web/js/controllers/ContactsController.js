// ContactsController
(function() {
    'use strict';

    angular
        .module('contatooh')
    	.controller('ContactsController',

    		function(Contact, $scope) {
    		
	    		// obj	
	    		$scope.contacts = [];
	    		$scope.filter = '';
	    		$scope.msg = {text: ''};
				
				// lista all contacts
				function getContacts() {
					Contact.query(
						function(contacts) {
							$scope.contacts = contacts;
							$scope.msg = {};		
						},
						function(error){
							$scope.msg = {text: 'Do not is possible get an list of contacts!'};
							console.log('App Contatooh: ' + error);
						}
					);
				}
				// list contcts when contoller loader
				getContacts();

				// remove contact
				$scope.remove = function(contact) {
					console.log(contact.name);
					Contact.delete({id: contact._id},
						getContacts,
						function(error) {
							$scope.msg = {text: 'Do not is possible remove contact of list!'};
							console.log('App Contatooh: ' + error);
						}
					);
				};
			});

})();