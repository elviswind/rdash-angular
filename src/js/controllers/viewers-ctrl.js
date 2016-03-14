angular
    .module('RDash')
    .controller('ViewersCtrl', ['$scope', '$http', ViewersCtrl]);

function ViewersCtrl($scope, $http) {
    $scope.viewer = {};
    $scope.RefreshViewers = function() {
        $http.get('/viewers').success(function(data) {
            for (var i = 0; i < data.length; i++) {
                data[i].onlyContent = data[i].onlyContent ? true : false;
            }
            $scope.viewers = data;
        });
    };
    $scope.RefreshViewers();
    $scope.editViewer = function(viewer) {
        $scope.viewer = viewer;
    }
}
