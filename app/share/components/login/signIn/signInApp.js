require('../../../services/loginService.js');

var app = angular.module('signInApp', ['loginServiceApp']);

app.directive('signInForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'signInView.html',
    controller: ['$scope','$window', 'loginService', function($scope, $window, loginService) {
      $scope.signInPassword = '';
      $scope.signInEmail = '';
      $scope.submitSignIn = function() {
        loginService.signIn({email: $scope.signInEmail, password: $scope.signInPassword}, loginService.processSignInResults);
      };
    }]
  };
});
