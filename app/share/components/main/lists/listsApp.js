var app = angular.module('listsApp', []);

app.directive('lists', function() {
  return {
    restrict: 'E',
    templateUrl: 'listsView.html',
    controller: ['$scope', function($scope) {
      $scope.lists = [];
    }]
  };
});
