var mod = angular.module('RDash', ['ui.bootstrap', 'ui.router', 'ngCookies', 'ui.ace']);
mod.factory('jobService', function() {
    var jobs;
    var job;
    return {
        allJobs: jobs,
        currentJob: job
    };
});
