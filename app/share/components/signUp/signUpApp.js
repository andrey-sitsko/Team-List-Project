require('../../services/loginService.js');
require('../../routes/loginRoutes.js');

var app = angular.module('signUpApp', ['loginRoutes', 'loginServiceApp']);

app.directive('signUpModalDialog', function() {
  return {
    restrict: 'E',
    templateUrl: 'signUpView.html',
    controller: ['$scope','loginService', function($scope, loginService) {
      $scope.signUpName = '';
      $scope.signUpPassword = '';
      $scope.signUpEmail = '';
      $scope.submitSignUp = function() {
        loginService.signUp({name: $scope.signUpName, password: $scope.signUpPassword, email: $scope.signUpEmail});
      };
    }]
  };
});
