require('./signInService.js');
require('./signInStyle.css');

var app = angular.module('signInApp', ['signInServiceApp']);

app.directive('signInForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'signInView.html',
    controller: ['$scope','$window', 'signInService', function($scope, $window, signInService) {
      $scope.signInPassword = '';
      $scope.signInEmail = '';
      $scope.submitSignIn = function() {
        signInService.signIn({email: $scope.signInEmail, password: $scope.signInPassword});
      };
    }]
  };
});
