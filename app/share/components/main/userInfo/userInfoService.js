var app = angular.module('mainApp');

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
