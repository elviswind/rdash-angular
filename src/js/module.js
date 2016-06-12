var mod = angular.module('RDash', ['ui.bootstrap', 'ui.router', 'ngCookies', 'ui.ace']);
mod.factory('util', function() {
    var self = {};
    self.current = {};
    self.InjectListCrudScope = function(name, singleName, $scope, $http, $location, params){
      var apipath = params.isAdmin ? '/suapi/' : '/api/';
      $scope.fetchList = function() {
          $scope[name] = null;
          $http.get(apipath + name).success(function(data) {
              $scope[name] = data;
          });
      };
      $scope.fetchList();

      $scope.editItem = function(item) {
          self.current[singleName] = item;
          $location.url('/' + singleName + '/edit');
      }

      $scope.deleteItem = function(item) {
          self.current[singleName] = item;
          $http.post(apipath + 'delete' + singleName, string).success(function(data) {
              $scope.fetchStrings();
          });
      }
    };
    self.InjectSingleItemScope = function(singleName, $scope, $stateParams){
      $scope.errors = [];
      var key = $stateParams.key;
      if (key == "edit" && self.current[singleName]) {
          $scope[singleName] = self.current[singleName];
      } else if (key == "new") {
        $scope[singleName] = {};
      }
    };
    return self;
});
