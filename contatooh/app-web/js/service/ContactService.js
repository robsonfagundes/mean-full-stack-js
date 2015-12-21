// service resource REST endpoints
(function() {
    'use strict';

    angular
        .module('contatooh')
        .factory('Contact', function($resource) {
        	return $resource('http://localhost:3000/contacts/:id');
        });
})();