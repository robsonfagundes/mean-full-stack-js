(function() {
    'use strict';

    angular
        .module('contatooh')
        	.controller('ContatoController', function($scope, $routeParams) {
        		console.log($routeParams.contatoId);
        	});
})();