angular
    .module('RDash')
    .controller('JobsCtrl', ['$scope', '$http', '$location', 'util', JobsCtrl]);

function JobsCtrl($scope, $http, $location, util) {
    $scope.RefreshJobs = function() {
      console.log('a');
        $scope.j1 = null;
        $scope.j2 = null;
        $http.get('/suapi/jobs').success(function(data) {
            var j1 = [], j2 = [];
            for (var i = 0; i < data.length; i++) {
                data[i].activeClass = data[i].active ? "active" : "";
                data[i].activeText = data[i].active ? "on" : "off";
                if(data[i].active){
                  j1.push(data[i])
                }
                else j2.push(data[i])
            }
            $scope.j1 = j1;
            $scope.j2 = j2;
            util.allJobs = data;
        });
    };

    $scope.RefreshJobs();

    $scope.editjob = function(x) {
        var job = JSON.parse(x);
        try {
            job.listHeaders = JSON.stringify(JSON.parse(job.listHeaders), null, 4);
        } catch(e){}
        util.current.job = job;
        $location.url('/job/edit');
    };
    $scope.activejob = function(job) {
        $http.post('/suapi/active/' + job.name + '/' + (job.active + 1) % 2).success(function() {
            $scope.RefreshJobs();
        });
    };
    $scope.resetjob = function(name) {
        $http.post('/suapi/reset/' + name).success(function() {
            $scope.RefreshJobs();
        });
    };
    $scope.deletejob = function(name) {
        $http.post('/suapi/delete/' + name).success(function() {
            $scope.RefreshJobs();
        });
    };
    $scope.startjob = function(name) {
        $http.post('/suapi/start/' + name).success(function() {
            $scope.RefreshJobs();
        });
    };
}
