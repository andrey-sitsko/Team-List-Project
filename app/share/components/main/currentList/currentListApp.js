var app = angular.module('currentListApp', []);

app.directive('currentList', function() {
  return {
    restrict: 'E',
    templateUrl: 'currentListView.html'
  };
});
