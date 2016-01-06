var app = angular.app('signInApp', []);

app.directive('signInForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'signInView.html'
  };
});
