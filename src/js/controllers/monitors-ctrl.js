angular
    .module('RDash')
    .controller('MonitorsCtrl', ['$scope', '$http', '$location', 'util', MonitorsCtrl]);

function MonitorsCtrl($scope, $http, $location, util) {
    $scope.RefreshMonitors = function() {
        $scope.monitors = null;
        $http.get('/suapi/monitors').success(function(data) {
            for (var i = 0; i < data.length; i++) {
                data[i].activeClass = data[i].active ? "active" : "";
                data[i].activeText = data[i].active ? "运行中" : "未运行";
            }
            $scope.monitors = data;
        });
    };
    $scope.RefreshMonitors();
    $scope.activeMonitor = function(m) {
        $http.post('/suapi/activemonitor/' + m.name + '/' + (m.active + 1) % 2).success(function() {
            $scope.RefreshMonitors();
        });
    };
    $scope.editMonitor = function(x) {
        util.currentMonitor = JSON.parse(x);
        $location.url('/monitor/edit')
    }
    $scope.deleteMonitor = function(name) {
        $http.post('/suapi/deletemonitor/' + name).success(function() {
            $scope.RefreshMonitors();
        });
    }
}
