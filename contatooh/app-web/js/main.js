// routeProvider
(function() {
    'use strict';

    angular
        .module('contatooh', [
            'ngRoute', 'ngResource'
        ])
        .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
            
            // routes
            $routeProvider
                .when('/contacts', {
                    templateUrl: 'contacts.html', 
                    controller: 'ContactsController'
                })
                .when('/contact', {
                    templateUrl: 'contact.html', 
                    controller: 'ContactController'
                })
                .when('/contact/:contactId', {
                    templateUrl: 'contact.html', 
                    controller: 'ContactController'
                })
                .otherwise({redirectTo: '/contacts'}),

                // Enable cross domain calls
                $httpProvider.defaults.useXDomain = true, 

                //Remove the header used to identify ajax call  that would prevent CORS from working
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }]);

 })();