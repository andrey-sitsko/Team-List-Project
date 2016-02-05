require('../../../services/currentUserService.js');
require('./listsService.js');

var app = angular.module('listsApp', ['listsServiceApp', 'currentUserServiceApp']);

app.directive('lists', function() {
  return {
    restrict: 'E',
    templateUrl: 'listsView.html',
    controller: ['$scope', 'listsService', 'currentUserService', function($scope, listsService, currentUserService) {
      var user = currentUserService.getUser();
      $scope.lists = user.lists;
      $scope.addList = function(title) {
        var id = listsService.createList(title, user);
        $scope.lists.push({title: title, id: id});
        $scope.newListTitle = '';
      };
      $scope.deleteList = function(list) {
        listsService.deleteList(list);
        $scope.lists.splice($scope.lists.indexOf(list), 1);
      };
      $scope.checkList = function(list) {
        listsService.checkList(list, $scope.lists.indexOf(list));
      };
    }]
  };
});
