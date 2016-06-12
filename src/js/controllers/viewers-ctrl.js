angular
    .module('RDash')
    .controller('ViewersCtrl', ['$scope', '$http', '$location', 'util', ViewersCtrl]);

function ViewersCtrl($scope, $http, $location, util) {
    util.InjectListCrudScope('viewers', 'viewer', $scope, $http, $location, {isAdmin: true});
}
