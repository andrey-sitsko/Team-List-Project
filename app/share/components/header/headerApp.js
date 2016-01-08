var app = angular.module('headerApp', []);

app.directive('header', function() {
  return {
    restrict: 'E',
    templateUrl: 'headerView.html'
  };
});
