var mod = angular.module('RDash', ['ui.bootstrap', 'ui.router', 'ngCookies', 'ui.ace', 'ui.tinymce']);
mod.factory('util', function() {
    var self = {};
    self.current = {};
    self.InjectListCrudScope = function(name, singleName, $scope, $http, $location, params){
      var apipath = params.isAdmin ? '/suapi/' : '/api/';
      $scope.fetchList = function() {
          $scope[name] = null;
          $http.get(apipath + name).success(function(data) {
              $scope[name] = data;
          }).error(function(ret){
              $scope[name] = [];
              alert(ret);
          });
      };
      $scope.fetchList();

      $scope.editItem = function(item) {
          self.current[singleName] = item;
          $location.url('/' + singleName + '/edit');
      }

      $scope.deleteItem = function(item) {
          $http.post(apipath + 'delete' + singleName, item).success(function(data) {
              $scope.fetchList();
          });
      }
    };
    self.InjectSingleItemScope = function(singleName, $scope, $http, $stateParams, params){
      $scope.errors = [];
      var key = $stateParams.key;
      if (key == "edit" && self.current[singleName]) {
          $scope[singleName] = self.current[singleName];
      } else if (key == "new") {
          $scope[singleName] = {};
      }
      else{
          alert('error');
          return;
      }
      var apipath = params.isAdmin ? '/suapi/' : '/api/';
      $scope.saveItem = function(){
        $http.post(apipath + key + singleName, $scope[singleName]).success(function(data) {
            alert('done');
        });
      }
    };
    return self;
});
