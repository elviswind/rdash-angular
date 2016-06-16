angular
    .module('RDash')
    .controller('TextblocksCtrl', ['$scope', '$http', 'util', '$location', TextblocksCtrl]);

function TextblocksCtrl($scope, $http, util, $location) {
    util.InjectListCrudScope('blocks', 'block', $scope, $http, $location, {isAdmin: true});
}
