angular
    .module('RDash')
    .controller('NewStringCtrl', ['$scope', '$http', '$location', '$stateParams', 'util', NewStringCtrl]);

function NewStringCtrl($scope, $http, $location, $stateParams, util) {
    $scope.errors = [];
    var key = $stateParams.key;
    if (key == "edit" && util.currentString) {
        $scope.string = util.currentString;
    } else if (key == "new") {
        $scope.string = {};
    }
    $scope.saveString = function() {
        $scope.errors = [];
        if (!$scope.string.name) {
            $scope.errors.push("name can't be null");
        }
        else if (!$scope.string.value) {
            $scope.errors.push("value can't be null");
        }
        else{
            $http.post('/api/savestring', $scope.string).success(function(data) {
                $scope.viewer = {};
                $scope.errors = [];
                $location.url('/strings');
            });
        }
    };

    $scope.aceChanged = function($e) {
        document.getElementById('html').value = $e[1].session.getValue();
    };
}
