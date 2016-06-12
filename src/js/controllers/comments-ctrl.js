angular
    .module('RDash')
    .controller('CommentsCtrl', ['$scope', '$http', 'util', '$location', CommentsCtrl]);

function CommentsCtrl($scope, $http, util, $location) {
    util.InjectListCrudScope('comments', 'comment', $scope, $http, $location, {isAdmin: false});
}
