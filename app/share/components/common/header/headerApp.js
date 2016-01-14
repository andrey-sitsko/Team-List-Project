var app = angular.module('headerApp', []);

app.directive('header', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'headerView.html'
  };
});
