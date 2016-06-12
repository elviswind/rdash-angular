angular
    .module('RDash')
    .controller('NewMonitorCtrl', ['$scope', '$http', '$location', '$stateParams', 'util', NewMonitorCtrl]);

function NewMonitorCtrl($scope, $http, $location, $stateParams, util) {
    var key = $stateParams.key;
    if (key == "edit" && util.current.monitor) {
        $scope.monitor = util.current.monitor;
    } else if (key == "new") {
        $scope.monitor = {};
        $scope.monitor.action = monitorActionExample.toString();
        $scope.monitor.interval = 10;
    }

    $scope.save = function() {
        $http.post('/suapi/savemonitor', $scope.monitor).success(function(data) {
            $scope.monitor = {};
            $location.url('/monitors');
        });
    };
    $scope.testMonitor = function(){
        $scope.showTestResult = false;
        $http.post('/suapi/testMonitor', $scope.monitor).success(function(data) {
            $scope.showTestResult = true;
            $scope.testLogs = data.logs;
        });
    }
}
