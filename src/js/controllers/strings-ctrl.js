angular
    .module('RDash')
    .controller('StringsCtrl', ['$scope', StringsCtrl]);

function StringsCtrl($scope) {
    $scope.fetchStrings = function() {
        $scope.strings = null;
        $http.get('/api/strings/').success(function(data) {
            for (var i = 0; i < data.length; i++) {
                data[i].date = moment(data[i].createDate).format('MMMM Do YYYY, h:mm:ss a');;
            }
            $scope.strings = data;
        });
    };
    $scope.fetchLogs(3);

    $scope.editString = function(data) {
        $http.post('/api/editstring/', data).success(function(data) {
            $scope.fetchLogs($scope.logtype);
        });
    }
}
