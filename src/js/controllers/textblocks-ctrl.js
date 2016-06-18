angular
    .module('RDash')
    .controller('TextblocksCtrl', ['$scope', '$http', 'util', '$location', TextblocksCtrl]);

function TextblocksCtrl($scope, $http, util, $location) {
    util.InjectListCrudScope('textblocks', 'textblock', $scope, $http, $location, {isAdmin: false});
}
