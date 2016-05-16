require('./userInfoStyle.css');

var app = angular.module('mainApp');

app.directive('userInfo', function() {
  return {
    restrict: 'E',
    templateUrl: 'userInfoView.html',
    controller: ['$scope', '$http', '$window', function($scope, $http, $window) {
      $scope.logout = function() {
        $http.get('/logout').then(function(res) {
          $window.location.href = '/';
        });
      };
    }]
  };
});
