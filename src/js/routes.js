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
            .state('users', {
                url: '/users',
                templateUrl: 'templates/users.html'
            })
            .state('contents', {
                url: '/contents',
                templateUrl: 'templates/contents.html'
            })
            .state('newcontent', {
                url: '/content/:key',
                templateUrl: 'templates/newcontent.html'
            })
            .state('comments', {
                url: '/comments',
                templateUrl: 'templates/comments.html'
            })
            .state('strings', {
                url: '/strings',
                templateUrl: 'templates/strings.html'
            })
            .state('newstring', {
                url: '/string/:key',
                templateUrl: 'templates/newstring.html'
            })
            .state('logs', {
                url: '/logs',
                templateUrl: 'templates/logs.html'
            })
            .state('pages', {
                url: '/pages',
                templateUrl: 'templates/pages.html'
            })
            .state('newpage', {
                url: '/page/:key',
                templateUrl: 'templates/newpage.html'
            });
    }
]);
