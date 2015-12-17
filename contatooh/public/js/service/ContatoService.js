// service resource REST endpoints
(function() {
    'use strict';

    angular
        .module('contatooh')
        .factory('Contact', function($resource) {
        	return $resource('/contatos/:id');
        });
})();



var c1 = {'name' : 'Robson Fagundes', 'email' : 'robsonfagundes@gmail.com'},
var c2 = {'name' : 'João da Silva', 'email' : 'jds@gmail.com'},
var c3 = {'name' : 'Pedro Lorival', 'email' : 'llorivalpedro@gmail.com'},
var c4 = {'name' : 'Marcelo White Wind', 'email' : 'mwww@gmail.com'},
var c5 = {'name' : 'Rocha Madeira', 'email' : 'madeirao@gmail.com'},
var c6 = {'name' : 'José Quatroevinte', 'email' : 'quatroevinte@gmail.com'}