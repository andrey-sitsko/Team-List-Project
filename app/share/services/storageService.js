var app = angular.module('storageServiceApp', []);

app.service('userStorageService', ['$http', function($http) {
  var user = {};

  this.getUser = function(callback) {
    $http.get('/currentUser').then(function(res) {
      user = res.data;
      if(callback) {
        callback(res.data);
      }
    });
  };

  this.get = function() {
   return user;
 };

}]);
