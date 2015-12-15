(function() {
    'use strict';

    angular
        .module('contatooh', [
            'ngRoute'
        ])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/contatos', {
                    templateUrl: 'contatos.html', 
                    controller: 'ContatosController'
                })
                .when('/contato/:contatoId', {
                    templateUrl: 'contato.html', 
                    controller: 'ContatoController'
                })
                .otherwise({redirectTo: '/contatos'});
        }]);


 })();