angular
    .module('RDash')
    .controller('NewViewerCtrl', ['$scope', '$http', '$location', '$stateParams', 'util', NewViewerCtrl]);

function NewViewerCtrl($scope, $http, $location, $stateParams, util) {
    util.InjectSingleItemScope('viewer', $scope, $stateParams);
    if(!$scope.viewer.type) $scope.viewer.type = "admin-table";
    $scope.saveViewer = function() {
        if (!$scope.viewer.name) {
            $scope.viewer.name = prompt("name of this sql");
        }
        $http.post('/suapi/saveviewer', $scope.viewer).success(function(data) {
            $scope.viewer = {};
            $location.url('/viewers');
        });
    };

    $scope.aceChanged = function($e) {
        document.getElementById('sql').value = $e[1].session.getValue();
    };
}
