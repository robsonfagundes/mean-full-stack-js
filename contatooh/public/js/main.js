(function() {
    'use strict';

    angular
        .module('contatooh', [
			'ngRoute'
        ])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/contato/:contatoId', {
                    templateUrl: 'partials/contatos.html', 
                    controller: 'ContatosController'
                })
                .when('/contact', {
                    templateUrl: 'partials/contato.html', 
                    controller: 'ContatoController'
                })
                .otherwise({redirectTo: '/contatos'});
        }]);


 })();