angular
    .module('RDash')
    .controller('NewContentCtrl', ['$scope', '$http', '$location', '$stateParams', 'util', NewContentCtrl]);

function NewContentCtrl($scope, $http, $location, $stateParams, util) {
    util.InjectSingleItemScope('content', $scope, $http, $stateParams, {isAdmin: false});
    $scope.tinymceOptions = {
        plugins : 'image lists preview',
        theme : 'modern'
    };
}
