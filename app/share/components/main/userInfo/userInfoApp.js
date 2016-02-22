require('./userInfoService.js');
require('../../../services/currentUserService.js');

var app = angular.module('userInfoApp', ['userInfoServiceApp', 'currentUserServiceApp']);

app.directive('userInfo', function() {
  return {
    restrict: 'E',
    templateUrl: 'userInfoView.html',
    controller: ['$scope', 'userInfoService', 'currentUserService', function($scope, userInfoService, currentUserService) {
      $scope.currentUserName = currentUserService.getUser().name;
      $scope.logout = function() {
        userInfoService.signOut();
      };
    }],
  };
});
