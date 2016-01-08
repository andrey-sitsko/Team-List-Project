var app = angular.module('signInApp', []);

app.directive('signInForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'signInView.html',
    controller: ['$scope','loginService', function($scope, loginService) {
      $scope.signInPassword = '';
      $scope.signInEmail = '';
      $scope.submitSignIn = function() {
        loginService.signIn({email: $scope.signInEmail, password: $scope.signInPassword});
      };
    }]
  };
});
