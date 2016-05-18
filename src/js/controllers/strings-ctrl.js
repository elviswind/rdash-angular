angular
    .module('RDash')
    .controller('StringsCtrl', ['$scope', '$http', 'util', '$location', StringsCtrl]);

function StringsCtrl($scope, $http, util, $location) {

    $scope.limit = 30;
    $scope.fetchStrings = function() {
        $scope.strings = null;
        $http.get('/suapi/strings').success(function(data) {
            $scope.strings = data;
        });
    };
    $scope.fetchStrings();

    $scope.editString = function(string) {
        util.currentString = string;
        $location.url('/string/edit');
    }
    $scope.deleteString = function(string) {
        util.currentString = string;
        $http.post('/suapi/deletestring', string).success(function(data) {
            $scope.fetchStrings();
        });
    }
}
