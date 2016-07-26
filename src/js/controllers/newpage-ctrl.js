angular
    .module('RDash')
    .controller('NewPageCtrl', ['$scope', '$http', '$location', '$stateParams', 'util', NewPageCtrl]);

function NewPageCtrl($scope, $http, $location, $stateParams, util) {
    util.InjectSingleItemScope('page', $scope, $http, $stateParams, {isAdmin: true});
}
