var app = angular.module('listsApp', []);

app.directive('lists', function() {
  var lists = {};
  lists.restrict = 'E';
  lists.templateUrl = 'listsView.html';
  lists.controller = ['$scope', function($scope) {

  }];
  return lists;
});
