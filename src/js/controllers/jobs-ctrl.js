angular
    .module('RDash')
    .controller('JobsCtrl', ['$scope', '$http', '$location', 'util', JobsCtrl]);

function JobsCtrl($scope, $http, $location, util) {
    $scope.RefreshJobs = function() {
      console.log('a');
        $scope.jobs = null;
        $http.get('/suapi/jobs').success(function(data) {
            for (var i = 0; i < data.length; i++) {
                data[i].activeClass = data[i].active ? "active" : "";
                data[i].activeText = data[i].active ? "运行中" : "未运行";
            }
            $scope.jobs = data;
            util.allJobs = data;
        });
    };

    $scope.RefreshJobs();

    $scope.editjob = function(x) {
        util.currentJob = JSON.parse(x);
        $location.url('/job/edit');
    };
    $scope.activejob = function(job) {
        $http.post('/suapi/active/' + job.name + '/' + (job.active + 1) % 2).success(function() {
            $scope.RefreshJobs();
        });
    };
    $scope.resetjob = function(name) {
        $http.post('/suapi/reset/' + name).success(function() {
            $scope.RefreshJobs();
        });
    };
    $scope.deletejob = function(name) {
        $http.post('/suapi/delete/' + name).success(function() {
            $scope.RefreshJobs();
        });
    };
    $scope.startjob = function(name) {
        $http.post('/suapi/start/' + name).success(function() {
            $scope.RefreshJobs();
        });
    };
}
