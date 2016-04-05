require('./userInfoService.js');
require('../../../services/currentUserService.js');
require('./userInfoStyle.css');

var app = angular.module('mainApp');

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
