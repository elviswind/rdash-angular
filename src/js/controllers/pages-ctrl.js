angular
    .module('RDash')
    .controller('PagesCtrl', ['$scope', '$http', 'util', '$location', PagesCtrl]);

function PagesCtrl($scope, $http, util, $location) {
    util.InjectListCrudScope('pages', 'page', $scope, $http, $location, {isAdmin: true});
}
