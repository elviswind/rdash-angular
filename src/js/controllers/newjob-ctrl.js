angular
    .module('RDash')
    .controller('NewJobCtrl', ['$scope', '$http', '$stateParams', 'util', NewJobCtrl]);

function NewJobCtrl($scope, $http, $stateParams, util) {
    var key = $stateParams.key;
    var step = 1;
    if (key == "edit" && util.current.job) {
        $scope.searcher = util.current.job;
        step = 2;
    } else if (key == "new") {
        $scope.searcher = null;
        step = 1;
    }
    $scope.visible = {
        step: step
    };

    $scope.ProcessStep1 = function() {
        $http.post('/suapi/step1', {
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
        $scope.showTestListResult = false;
        $scope.testListDataJSON = null;
        $scope.testListLogs = null;
        $http.post('/suapi/testList', $scope.searcher).success(function(data) {
            $scope.showTestListResult = true
            $scope.testListDataJSON = JSON.stringify(data.data[0], null, '\t');
            $scope.testListLogs = data.logs;
        }).error(function(err){
            $scope.showTestListResult = true
            $scope.testListDataJSON = JSON.stringify(err, null, '\t');
            $scope.testListLogs = null;
        });
    };
    $scope.testContent = function() {
      $scope.showTestContentResult = false;
      $scope.testContentDataJSON = null;
      $scope.testContentLogs = null;
        $http.post('/suapi/testContent', $scope.searcher).success(function(data) {
            $scope.showTestContentResult = true;
            $scope.testContentDataJSON = data.data;
            $scope.testContentLogs = data.logs;
        }).error(function(err){
            $scope.showTestContentResult = true
            $scope.testContentDataJSON = JSON.stringify(err, null, '\t');
            $scope.testContentLogs = null;
        });
    };
    $scope.save = function() {
        $http.post('/suapi/saveJob', $scope.searcher).success(function(data) {
            alert(data);
        });
    };
}
