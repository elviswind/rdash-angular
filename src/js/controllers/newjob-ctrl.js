angular
    .module('RDash')
    .controller('NewJobCtrl', ['$scope', '$http', '$stateParams', 'util', NewJobCtrl]);

function NewJobCtrl($scope, $http, $stateParams, util) {
    var key = $stateParams.key;
    var step = 1;
    if (key == "edit" && util.currentJob) {
        $scope.searcher = util.currentJob;
        step = 2;
    } else if (key == "new") {
        $scope.searcher = null;
        step = 1;
    }
    $scope.visible = {
        step: step
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
    $scope.testList = function() {
        $scope.listTestDataJSON = null;
        $scope.listTestLogs = null;
        $http.post('/testList', $scope.searcher).success(function(data) {
            $scope.listTestDataJSON = JSON.stringify(data.data[0], null, '\t');
            $scope.listTestLogs = data.logs;
        });
    };
    $scope.testContent = function() {
        $http.post('/testContent', $scope.searcher).success(function(data) {
            alert(data);
            console.log(data);
        });
    };
    $scope.save = function() {
        $http.post('/saveJob', $scope.searcher).success(function(data) {
            alert(data);
        });
    };
}
