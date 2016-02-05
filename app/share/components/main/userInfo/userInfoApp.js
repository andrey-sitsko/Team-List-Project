require('../../../services/loginService.js');
require('../../../services/currentUserService.js');

var app = angular.module('userInfoApp', ['loginServiceApp', 'currentUserServiceApp']);

app.directive('userInfo', function() {
  return {
    restrict: 'E',
    templateUrl: 'userInfoView.html',
    controller: ['$scope', '$window', 'loginService', 'currentUserService', function($scope, $window, loginService, currentUserService) {
      $scope.currentUserName = currentUserService.get().name;
      $scope.logout = function() {
        loginService.signOut(function(res) {
          $window.location.href = '/';
        });
      };
    }],
  };
});
