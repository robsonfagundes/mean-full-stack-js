(function() {
    'use strict';

    angular
        .module('contatooh')
        	.controller('ContatosController', function($scope) {
        		//add
        		$scope.total = 0;
        		$scope.add = function() {
        			$scope.total++;
        		} 
        		//list contacts
        		$scope.contatos = [
        			{'_id': 1, 'name': 'robson fagundes', 'email': 'robsonfagundes@gmail.com'},
        			{'_id': 2, 'name': 'robson r-sys', 'email': 'fagundes@rsyssoftwares.com.br'},
        			{'_id': 3, 'name': 'r-sys softwares', 'email': 'contato@rsyssoftwares.com.br'}
        		];
        		//filter by name and email
        		$scope.name_filter = '';
        		
        	});
})();