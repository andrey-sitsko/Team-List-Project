var app = angular.module('signInApp', []);

app.directive('signInForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'signInView.html',
    controller: ['$scope','loginService', function($scope, loginService) {
      $scope.password = '';
      $scope.email = '';
      $scope.submitSignIn = function() {
        loginService.signIn({email: $scope.email, password: $scope.password});
      };
    }]
  };
});
