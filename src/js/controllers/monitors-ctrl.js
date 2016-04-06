angular
    .module('RDash')
    .controller('MonitorsCtrl', ['$scope', '$http', '$location', 'util', MonitorsCtrl]);

function MonitorsCtrl($scope, $http, $location, util) {
    $scope.RefreshMonitors = function() {
        $scope.monitors = null;
        $http.get('/monitors').success(function(data) {
            for (var i = 0; i < data.length; i++) {
                data[i].onlyContent = data[i].onlyContent ? true : false;
            }
            $scope.monitors = data;
        });
    };
    $scope.RefreshMonitors();
    $scope.editMonitor = function(monitor) {
        util.currentMonitor = monitor;
        $location.url('/monitor/edit')
    }
    $scope.deleteMonitor = function(name) {
        $http.post('/deleteviewer/' + name).success(function() {
            $scope.RefreshViewers();
        });
    }
}
