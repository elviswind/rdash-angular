angular
    .module('RDash')
    .controller('LogsCtrl', ['$scope', '$http', 'util', LogsCtrl]);

function LogsCtrl($scope, $http, util) {
    $scope.fetchLogs = function(logtype) {
        if (logtype >= 0 && logtype <= 4) {
            $scope.logtype = logtype;
            $scope.logs = null;
            $http.get('/suapi/logs/' + logtype).success(function(data) {
                for (var i = 0; i < data.length; i++) {
                    data[i].date = moment(data[i].createDate).format('MMMM Do YYYY, h:mm:ss a');;
                }
                $scope.logs = data;
            });
        }
    };
    $scope.fetchLogs(3);

    $scope.cleanLogs = function() {
        $http.get('/suapi/cleanlogs').success(function(data) {
            $scope.fetchLogs($scope.logtype);
        });
    }
}
