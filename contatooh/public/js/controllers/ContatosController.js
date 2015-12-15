(function() {
    'use strict';

    angular
        .module('contatooh')
        	.controller('ContatosController', function($scope) {
        		$scope.total = 0;
        		$scope.add = function() {
        			$scope.total++;
        		} 

        	});
})();