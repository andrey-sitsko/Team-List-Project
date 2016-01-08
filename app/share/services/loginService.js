var app = angular.module('loginServiceApp', []);

app.service('loginService', ['$http', function($http) {
    this.signUp = function(authData) {
      $http.post('/signUp', authData).then(
          function(success) {
              console.log('signUp success callback' + success);
          }, function(error) {
              console.log('signUp errr callback' + error);
          });
    };

    this.signIn = function(authData) {
      $http.post('/signIn', authData);
    };
}]);
