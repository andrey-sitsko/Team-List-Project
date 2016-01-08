var app = angular.module('loginServiceApp', []);

app.service('loginService', ['$http', function($http) {
    this.signUp = function(authData) {
      $http.post('/signUp', authData).then(
          function(res) {
              console.log('signUp success callback' + success);
          }, function(error) {
              console.log('signUp errr callback' + error);
          });
    };

    this.signIn = function(authData) {
      $http.post('/signIn', authData).then(
          function(res) {
              if(res.data.success) {
                  console.log('user found token:' + res.data.token);
              } else {
                  console.log('user not found');
              }

          }, function(error) {
              console.log('signIn errr callback' + error);
          });
    };
}]);
