require('../../../services/userStorageService.js');
require('./currentListService');

var app = angular.module('currentListApp', ['userStorageServiceApp', 'currentListServiceApp']);

app.directive('currentList', function() {
  return {
    restrict: 'E',
    templateUrl: 'currentListView.html',
    controller: ['$scope', 'userStorageService', 'currentListService', function($scope, userStorageService, currentListService) {
      /*var user = userStorageService.get();*/
      $scope.tasks = [];
      $scope.addTask = function(taskName) {
        $scope.addTask = function(title) {
          /*var id = currentListService.createTask(title, user);*/
          $scope.tasks.push({title: title});
          $scope.newTaskTitle = '';
        };
      };
    }]
  };
});
