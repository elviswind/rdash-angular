angular
    .module('RDash')
    .controller('ContentsCtrl', ['$scope', '$http', 'util', '$location', ContentsCtrl]);

function ContentsCtrl($scope, $http, util, $location) {
    util.InjectListCrudScope('contents', 'content', $scope, $http, $location, {isAdmin: false});
}
