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

    $scope.testListOver = false;
    $scope.testContentOver = false;
    $scope.testList = function() {
        $scope.testListDataJSON = 'loading';
        $scope.testListLogs = null;
        $http.post('/suapi/testList', $scope.searcher).then(function(response) {
            $scope.testListOver = true;
            $scope.testListDataJSON = JSON.stringify(response.data.data[0], null, '\t');
            $scope.testListLogs = response.data.logs;
        }, function(response){
            $scope.testListOver = true;
            $scope.testListDataJSON = 'request failed, response ' + response.status + '\r\n' + response.data
            $scope.testListLogs = '';
        });
    };
    $scope.testContent = function() {
      $scope.testContentDataJSON = 'loading';
      $scope.testContentLogs = null;
        $http.post('/suapi/testContent', $scope.searcher).then(function(response) {
            $scope.testContentOver = true;
            $scope.testContentDataJSON = response.data.data;
            $scope.testContentLogs = response.data.logs;
        }, function(err){
            $scope.testContentOver = true;
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
