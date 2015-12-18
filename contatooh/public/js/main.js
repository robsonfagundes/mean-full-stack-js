// routeProvider
(function() {
    'use strict';

    angular
        .module('contatooh', [
            'ngRoute', 'ngResource'
        ])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/contatos', {
                    templateUrl: 'contatos.html', 
                    controller: 'ContatosController'
                })
                .when('/contato', {
                    templateUrl: 'contato.html', 
                    controller: 'ContatoController'
                })
                .when('/contato/:contatoId', {
                    templateUrl: 'contato.html', 
                    controller: 'ContatoController'
                })
                .otherwise({redirectTo: '/contatos'});
        }]);

 })();