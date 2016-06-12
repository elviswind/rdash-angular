angular
    .module('RDash')
    .controller('ArticlesCtrl', ['$scope', '$http', 'util', '$location', ArticlesCtrl]);

function ArticlesCtrl($scope, $http, util, $location) {
    util.InjectListCrudScope('articles', 'article', $scope, $http, $location, {isAdmin: false});
}
