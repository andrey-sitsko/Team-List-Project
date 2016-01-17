require('../../../services/userStorageService.js');
require('./listsService.js');

var app = angular.module('listsApp', ['listsServiceApp', 'userStorageServiceApp']);

app.directive('lists', function() {
  return {
    restrict: 'E',
    templateUrl: 'listsView.html',
    controller: ['$scope', 'listsService', 'userStorageService', function($scope, listsService, userStorageService) {
      var user = userStorageService.get();
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
    }]
  };
});
