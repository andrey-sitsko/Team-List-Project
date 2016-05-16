require('./userInfoService.js');
require('../../../services/currentUserService.js');
require('./userInfoStyle.css');

var app = angular.module('mainApp');

app.directive('userInfo', function() {
  return {
    restrict: 'E',
    templateUrl: 'userInfoView.html',
    controller: ['$scope', 'userInfoService', 'currentUserService', function($scope, userInfoService, currentUserService) {
      $scope.logout = function() {
        $http.get('/logout').then(function(res) {
          $window.location.href = '/';
        });
      };
    }],
  };
});
