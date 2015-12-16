(function() {
    'use strict';

    angular
        .module('contatooh')
    	.controller('ContatosController', function($scope, $http) {
    		
    		// fields	
    		$scope.contacts = [];
    		$scope.filter = '';
			
			// list all coontacts        		
    		$http.get('/contatos')
    			.success(function(data) {
    				$scope.contacts = data;
    			})
    			.error(function(statusText) {
    				console.log('Do not is possible get the list of contacts!')
    			});
    		
    	});
})();