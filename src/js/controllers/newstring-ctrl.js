angular
    .module('RDash')
    .controller('NewStringCtrl', ['$scope', '$http', '$location', '$stateParams', 'util', NewStringCtrl]);

function NewStringCtrl($scope, $http, $location, $stateParams, util) {
    util.InjectSingleItemScope('string', $scope, $http, $stateParams, {isAdmin: true});

    $scope.aceChanged = function($e) {
        document.getElementById('html').value = $e[1].session.getValue();
    };
}
