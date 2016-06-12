angular
    .module('RDash')
    .controller('StringsCtrl', ['$scope', '$http', 'util', '$location', StringsCtrl]);

function StringsCtrl($scope, $http, util, $location) {
    util.InjectListCrudScope('strings', 'string', $scope, $http, $location, {isAdmin: true});
}
