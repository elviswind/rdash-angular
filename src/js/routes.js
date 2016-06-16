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
            .state('articles', {
                url: '/articles',
                templateUrl: 'templates/articles.html'
            })
            .state('newarticle', {
                url: '/article/:key',
                templateUrl: 'templates/newarticle.html'
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
            .state('viewers', {
                url: '/viewers',
                templateUrl: 'templates/viewers.html'
            })
            .state('newviewer', {
                url: '/viewer/:key',
                templateUrl: 'templates/newviewer.html'
            })
            .state('pages', {
                url: '/pages',
                templateUrl: 'templates/pages.html'
            })
            .state('jobs', {
                url: '/jobs',
                templateUrl: 'templates/jobs.html'
            })
            .state('newjob', {
                url: '/job/:key',
                templateUrl: 'templates/newjob.html'
            })
            .state('monitors', {
                url: '/monitors',
                templateUrl: 'templates/monitors.html'
            })
            .state('newmonitor', {
                url: '/monitor/:key',
                templateUrl: 'templates/newmonitor.html'
            });
    }
]);
