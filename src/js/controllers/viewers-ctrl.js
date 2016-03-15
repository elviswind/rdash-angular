angular
    .module('RDash')
    .controller('ViewersCtrl', ['$scope', '$http', '$location', 'util', ViewersCtrl]);

function ViewersCtrl($scope, $http, $location, util) {
    $scope.RefreshViewers = function() {
        $scope.viewers = [];
        $http.get('/viewers').success(function(data) {
            for (var i = 0; i < data.length; i++) {
                data[i].onlyContent = data[i].onlyContent ? true : false;
            }
            $scope.viewers = data;
        });
    };
    $scope.RefreshViewers();
    $scope.editViewer = function(viewer) {
        util.currentViewer = viewer;
        $location.url('/viewer/edit')
    }
    $scope.deleteViewer = function(name) {
        $http.post('/deleteviewer/' + name).success(function() {
            $scope.RefreshViewers();
        });
    }
}
