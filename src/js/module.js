var mod = angular.module('RDash', ['ui.bootstrap', 'ui.router', 'ngCookies', 'ui.ace']);
mod.factory('util', function() {
    var jobs, job, viewer;
    return {
        allJobs: jobs,
        currentJob: job,
        currentViewer: viewer
    };
});
