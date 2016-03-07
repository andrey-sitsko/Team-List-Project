require('./pageHeaderStyle.css');

var app = angular.module('pageHeaderApp', []);

app.directive('pageHeader', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'pageHeaderView.html'
  };
});
