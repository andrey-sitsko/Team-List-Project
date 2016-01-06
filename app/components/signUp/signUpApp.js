var app = angular.app('signUpApp', []);

app.directive('signUpModalDialog', function() {
  return {
    restrict: 'E',
    templateUrl: 'signUpView.html'
  };
});
