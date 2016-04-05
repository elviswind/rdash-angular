'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/jobs.html'
            })
            .state('viewers', {
                url: '/viewers',
                templateUrl: 'templates/viewers.html'
            })
            .state('monitors', {
                url: '/monitors',
                templateUrl: 'templates/monitors.html'
            })
            .state('newjob', {
                url: '/job/:key',
                templateUrl: 'templates/newjob.html'
            })
            .state('newviewer', {
                url: '/viewer/:key',
                templateUrl: 'templates/newviewer.html'
            })
            .state('newmonitor', {
                url: '/monitor/:key',
                templateUrl: 'templates/newmonitor.html'
            })
            .state('logs', {
                url: '/logs',
                templateUrl: 'templates/logs.html'
            });
    }
]);
