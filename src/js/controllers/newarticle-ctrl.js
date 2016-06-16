angular
    .module('RDash')
    .controller('NewArticleCtrl', ['$scope', '$http', '$location', '$stateParams', 'util', NewArticleCtrl]);

function NewArticleCtrl($scope, $http, $location, $stateParams, util) {
    util.InjectSingleItemScope('string', $scope, $stateParams);
    $scope.tinymceOptions = {
        plugins : 'image lists preview',
        theme : 'modern'
    };
}
