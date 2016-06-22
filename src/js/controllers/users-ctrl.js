angular
    .module('RDash')
    .controller('UsersCtrl', ['$scope', '$http', 'util', '$location', UsersCtrl]);

function UsersCtrl($scope, $http, util, $location) {
    util.InjectListCrudScope('users', 'user', $scope, $http, $location, {isAdmin: true});
}
