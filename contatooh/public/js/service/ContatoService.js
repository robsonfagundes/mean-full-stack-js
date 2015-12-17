// service resource REST endpoints
(function() {
    'use strict';

    angular
        .module('contatooh')
        .factory('Contact', function($resource) {
        	return $resource('/contatos/:id');
        });
})();