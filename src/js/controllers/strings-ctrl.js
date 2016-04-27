angular
    .module('RDash')
    .controller('StringsCtrl', ['$scope', '$http', StringsCtrl]);

function StringsCtrl($scope, $http) {
    $scope.fetchStrings = function() {
        $scope.strings = null;
        $http.get('/api/strings').success(function(data) {
            $scope.strings = data;
        });
    };
    $scope.fetchStrings();

    $scope.editString = function(data) {
        $http.post('/api/editstring/', data).success(function(data) {
            $scope.fetchLogs($scope.logtype);
        });
    }
}
