angular
    .module('RDash')
    .controller('NewViewerCtrl', ['$scope', '$http', '$location', '$stateParams', 'util', NewViewerCtrl]);

function NewViewerCtrl($scope, $http, $location, $stateParams, util) {
    var key = $stateParams.key;
    if (key == "edit" && util.currentViewer) {
        $scope.viewer = util.currentViewer;
    } else if (key == "new") {
        $scope.viewer = null;
    }
    $scope.saveViewer = function() {
        if (!$scope.viewer.name) {
            $scope.viewer.name = prompt("name of this sql");
        }
        $http.post('/saveviewer', $scope.viewer).success(function(data) {
            $scope.viewer = {};
            $location.url('/viewers');
        });
    };

    $scope.aceChanged = function($e) {
        document.getElementById('sql').value = $e[1].session.getValue();
    };
}
