require('../../services/loginService.js');
require('../../services/storageService.js');

var app = angular.module('userInfoApp', ['loginServiceApp', 'storageServiceApp']);

app.directive('userInfo', function() {
  return {
    restrict: 'E',
    templateUrl: 'userInfoView.html',
    controller: ['$scope', '$window', 'loginService', 'userStorageService', function($scope, $window, loginService, userStorageService) {
      userStorageService.getUser(function(user) {
        $scope.currentUserName = user.name;
      });
      $scope.logout = function() {
        loginService.signOut(function(res) {
          $window.location.href = '/';
        });
      };
    }]
  };
});
