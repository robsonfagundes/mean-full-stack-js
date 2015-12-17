(function() {
    'use strict';

    angular
        .module('contatooh')
    	.controller('ContatoController',

    		function($scope, Contact, $routeParams) {
				
       			// get obj contact
				if($routeParams.contatoId){
					Contact.get({id: $routeParams.contatoId},
					function(contact) {
						$scope.contact = contact;
						console.log('The contact is: ' + $routeParams.contatoId);
					},
					function(error) {
						$scope.msg = {text: 'Do not is possible get the contact!'};
						console.log(error);
					}
				);
				} else {
					$scope.contact = new Contact();
				}

				// save contact
				$scope.saveContact = function() {
					$scope.contact.save()
						.then(function () {
							$scope.msg = {text: 'Contact Saved!'};
							$scope.contact = new Contact(); //clear form
						})
						.catch(function (error) {
							$scope.msg = {text: 'Do not is possible add contact on list!'};
							console.log(error);
						});
				};
    	});
})();