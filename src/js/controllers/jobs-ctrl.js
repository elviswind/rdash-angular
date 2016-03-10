angular
    .module('RDash')
    .controller('JobsCtrl', ['$scope', '$http', JobsCtrl]);

var apiServer = "http://s.junnan.wang";
function JobsCtrl($scope, $http) {
    console.log('running');
    $scope.RefreshJobs = function() {
        console.log('abc');
        $http.get(apiServer + '/jobs').success(function(data) {
            for (var i = 0; i < data.length; i++) {
                data[i].activeClass = data[i].active ? "active" : "";
                data[i].activeText = data[i].active ? "运行中" : "未运行";
            }
            $scope.jobs = data;
        });
    };
    $scope.RefreshJobs();
}
