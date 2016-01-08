require('../../services/loginService.js');
require('../../routes/loginRoutes.js');

var app = angular.module('signUpApp', ['loginRoutes', 'loginServiceApp']);

app.directive('signUpModalDialog', function() {
  return {
    restrict: 'E',
    templateUrl: 'signUpView.html',
    controller: ['$scope','loginService', function($scope, loginService) {
      $scope.name = '';
      $scope.password = '';
      $scope.email = '';
      $scope.submitSignUp = function() {
        loginService.signUp({name: $scope.name, password: $scope.password, email: $scope.email});
      };
    }]
  };
});
