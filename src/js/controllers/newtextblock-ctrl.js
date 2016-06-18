angular
    .module('RDash')
    .controller('NewTextblockCtrl', ['$scope', '$http', '$location', '$stateParams', 'util', NewTextblockCtrl]);

function NewTextblockCtrl($scope, $http, $location, $stateParams, util) {
    util.InjectSingleItemScope('textblock', $scope, $http, $stateParams, {isAdmin: false});
    $scope.getArticles = function(){
        $http.get('/api/articles').success(function(data) {
            $scope.articles = data;
        });
    }
    $scope.getArticles();
}
