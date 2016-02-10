var app = angular.module('userInfoServiceApp', []);

app.service('userInfoService', ['$http', '$window', function($http, $window) {

  function processSignOutResults(res) {
    $window.location.href = '/';
  }

  return {
    signOut: function(res) {
      $http.get('/logout').then(processSignOutResults);
    }
  };
}]);
