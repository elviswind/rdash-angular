angular
    .module('RDash')
    .controller('NewArticleCtrl', ['$scope', '$http', '$location', '$stateParams', 'util', NewArticleCtrl]);

function NewArticleCtrl($scope, $http, $location, $stateParams, util) {
    util.InjectSingleItemScope('string', $scope, $stateParams);
    $scope.saveString = function() {
        $scope.errors = [];
        if (!$scope.string.name) {
            $scope.errors.push("name can't be null");
        }
        else if (!$scope.string.value) {
            $scope.errors.push("value can't be null");
        }
        else{
            $http.post('/suapi/savestring', $scope.string).success(function(data) {
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
