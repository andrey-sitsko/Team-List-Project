var app = angular.module('loginServiceApp', []);

app.service('loginService', ['$http', '$window', function($http, $window) {
    this.signUp = function(authData, successCallback) {
        $http.post('/signUp', authData).then(successCallback);
    };

    this.signIn = function(authData, successCallback) {
      $http.post('/signIn', authData).then(successCallback);
    };
}]);
