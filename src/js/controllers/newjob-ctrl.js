angular
    .module('RDash')
    .controller('NewJobCtrl', ['$scope', '$http', NewJobCtrl]);

function NewJobCtrl($scope, $http) {
    $scope.visible = {
        step: 1
    };
    $scope.ProcessStep1 = function() {
        $http.post('/step1', {
            listReq: $scope.chromeInfo
        }).success(function(data) {
            data.listHeaders = JSON.stringify(data.headers);
            if (!data.maxPageScript) data.maxPageScript = '1';
            delete data.headers['Referer'];
            delete data.headers['referer'];
            data.detailHeaders = JSON.stringify(data.headers);
            data.listUrlFormat = data.url;
            delete data.headers;
            delete data.url;
            data.getItems = getItemsExample.toString();
            data.getContent = getContentExample.toString();

            $scope.searcher = data;
            $scope.visible.step = 2;
        });
    };
}
