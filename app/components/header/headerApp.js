var app = angular.app('headerApp', []);

app.directive('header', function() {
  return {
    restrict: 'E',
    templateUrl: 'headerView.html'
  };
});
