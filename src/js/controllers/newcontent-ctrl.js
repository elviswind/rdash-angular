angular
    .module('RDash')
    .controller('NewContentCtrl', ['$scope', 'Upload', '$timeout', '$http', '$location', '$stateParams', 'util', NewContentCtrl]);

function NewContentCtrl($scope, Upload, $timeout, $http, $location, $stateParams, util) {
    util.InjectSingleItemScope('content', $scope, $http, $stateParams, {isAdmin: false});
    $scope.tinymceOptions = {
        plugins : 'image lists preview',
        theme : 'modern'
    };
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });
    $scope.changeImage = function(){
      $scope.content.imageUrl = null;
      $scope.content.imageId = null;
    }
    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: '/saveimage',
                    data: {
                      username: $scope.username,
                      file: file
                    }
                }).then(function (resp) {
                    $timeout(function() {
                        $scope.content.imageUrl = resp.data.url;
                        $scope.content.imageId = resp.data.id;
                        console.log('file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data));
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage +
                    	'% ' + evt.config.data.file.name);
                });
              }
            }
        }
    };
}
