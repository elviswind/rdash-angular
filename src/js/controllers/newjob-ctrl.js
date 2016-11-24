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

    $scope.testListMessage = '';
    $scope.ProcessStep1 = function() {
        $http.post('/suapi/step1', {
            listReq: $scope.chromeInfo
        }).success(function(data) {
            data.listHeaders = JSON.stringify(data.headers, null, 4);
            if (!data.maxPageScript) data.maxPageScript = '1';
            data.listUrlFormat = data.url;
            delete data.headers;
            delete data.url;
            data.getItems = getItemsExample.toString();
            data.getContent = getContentExample.toString();

            $scope.searcher = data;
            $scope.visible.step = 2;
        });
    };

    $scope.testListStatus = '';
    $scope.testContentStatus = '';
    $scope.testList = function() {
        $scope.testListStatus = 'loading';
        $scope.testListLogs = null;
        $http.post('/suapi/testList', $scope.searcher).then(function(response) {
            $scope.testListStatus = 'done';
            $scope.testListDataJSON = JSON.stringify(response.data.data[0], null, '\t');
            $scope.testListLogs = response.data.logs;
        }, function(response){
            $scope.testListStatus = 'done';
            $scope.testListDataJSON = 'request failed, response ' + response.status + '\r\n' + response.data
            $scope.testListLogs = '';
        });
    };
    $scope.testContent = function() {
      $scope.testContentStatus = 'loading';
      $scope.testContentLogs = null;
        $http.post('/suapi/testContent', $scope.searcher).then(function(response) {
            $scope.testContentStatus = 'done';
            $scope.testContentDataJSON = response.data.data;
            $scope.testContentLogs = response.data.logs;
        }, function(response){
            $scope.testContentStatus = 'done';
            $scope.testContentDataJSON = 'request failed, response ' + response.status + '\r\n' + response.data
            $scope.testContentLogs = '';
        });
    };
    $scope.save = function() {
        $http.post('/suapi/saveJob', $scope.searcher).success(function(data) {
            alert(data);
        });
    };
}
