angular
    .module('RDash')
    .controller('NewMonitorCtrl', ['$scope', '$http', '$location', '$stateParams', 'util', NewMonitorCtrl]);

function NewMonitorCtrl($scope, $http, $location, $stateParams, util) {
    var key = $stateParams.key;
    var step = 1;
    if (key == "edit" && util.currentMonitor) {
        $scope.monitor = util.currentMonitor;
        step = 2;
    } else if (key == "new") {
        $scope.monitor = {};
        $scope.monitor.action = monitorActionExample.toString();
        $scope.monitor.interval = 10;
        step = 1;
    }
    $scope.visible = {
        step: step
    };

    $scope.save = function() {
        $http.post('/savemonitor', $scope.monitor).success(function(data) {
            $scope.monitor = {};
            $location.url('/monitors');
        });
    };
    $scope.testMonitor = function(){
        $http.post('/testMonitor', $scope.monitor).success(function(data) {
            alert(data.result);
            console.log(data.logs);
        });
    }
}
