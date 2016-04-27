var mod = angular.module('RDash', ['ui.bootstrap', 'ui.router', 'ngCookies', 'ui.ace']);
mod.factory('util', function() {
    var jobs, job, viewer, string;
    return {
        allJobs: jobs,
        currentJob: job,
        currentViewer: viewer,
        currentString: string
    };
});
