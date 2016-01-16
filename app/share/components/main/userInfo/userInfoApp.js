require('../../../services/loginService.js');
require('../../../services/userStorageService.js');

var app = angular.module('userInfoApp', ['loginServiceApp', 'userStorageServiceApp']);

app.directive('userInfo', function() {
  return {
    restrict: 'E',
    templateUrl: 'userInfoView.html',
    controller: ['$scope', '$window', 'loginService', 'userStorageService', function($scope, $window, loginService, userStorageService) {
      $scope.currentUserName = userStorageService.get().name;
      $scope.logout = function() {
        loginService.signOut(function(res) {
          $window.location.href = '/';
        });
      };
    }],
  };
});
