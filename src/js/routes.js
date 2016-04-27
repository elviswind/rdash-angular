'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/strings');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/strings',
                templateUrl: 'templates/strings.html'
            })
            .state('newstring', {
                url: '/string/:key',
                templateUrl: 'templates/newstring.html'
            })
            .state('tables', {
                url: '/logs',
                templateUrl: 'templates/logs.html'
            });
    }
]);
