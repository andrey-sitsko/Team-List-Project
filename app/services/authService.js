var app = angular.module('authService', []);

app.factory('User', ['$http', function($http) {
  return {
    signUp: function(authData) {
      return $http.post('/api/signUp', authData);
    },
    signIn: function(authData) {
      return $http.post('/api/signIn', authData);
    }
  };
}]);
