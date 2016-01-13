require('../../services/loginService.js');

var app = angular.module('userInfoApp', ['loginServiceApp']);

app.directive('userInfo', function() {
  return {
    restrict: 'E',
    templateUrl: 'userInfoView.html',
    controller: ['$scope', 'loginService', function($scope, loginService) {
      $scope.logout = function() {
        loginService.signOut();
      };
    }]
  };
});
