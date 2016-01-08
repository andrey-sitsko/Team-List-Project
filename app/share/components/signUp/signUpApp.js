var app = angular.module('signUpApp', []);

app.directive('signUpModalDialog', function() {
  return {
    restrict: 'E',
    templateUrl: 'signUpView.html'
  };
});
