var app = angular.module('signInApp', []);

app.directive('signInForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'signInView.html'
  };
});
