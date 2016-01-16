require('../../../node_modules/angular-local-storage/dist/angular-local-storage.min.js');

var app = angular.module('userStorageServiceApp', ['LocalStorageModule']);

app.service('userStorageService', ['$http', 'localStorageService', function($http, localStorageService) {
  var user = {};

  this.set = function(newUser) {
    localStorageService.set('user', newUser);
  };

  this.get = function() {
    return localStorageService.get('user');
 };

}]);
