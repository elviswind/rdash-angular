angular
    .module('RDash')
    .controller('JobsCtrl', ['$scope', '$http', JobsCtrl]);

function JobsCtrl($scope, $http) {
    $scope.RefreshJobs = function() {
        $http.get('/jobs').success(function(data) {
            for (var i = 0; i < data.length; i++) {
                data[i].activeClass = data[i].active ? "active" : "";
                data[i].activeText = data[i].active ? "运行中" : "未运行";
            }
            $scope.jobs = data;
        });
    };
    $scope.RefreshJobs();

    $scope.editjob = function(x) {
    };
    $scope.activejob = function(job) {
        $http.post('/active/' + job.name + '/' + (job.active + 1) % 2).success(function() {
            $scope.RefreshJobs();
        });
    };
    $scope.resetjob = function(name) {
        $http.post('/reset/' + name).success(function() {
            $scope.RefreshJobs();
        });
    };
    $scope.deletejob = function(name) {
        $http.post('/delete/' + name).success(function() {
            $scope.RefreshJobs();
        });
    };
    $scope.startjob = function(name) {
        $http.post('/start/' + name).success(function() {
            $scope.RefreshJobs();
        });
    };
}
