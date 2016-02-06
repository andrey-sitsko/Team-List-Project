require('../../../services/currentUserService.js');
require('./tasksService');

var app = angular.module('tasksApp', ['tasksServiceApp', 'currentUserServiceApp']);

app.directive('tasks', function() {
  return {
    restrict: 'E',
    templateUrl: 'tasksView.html',
    controller: ['$scope', 'tasksService', 'currentUserService', function($scope, tasksService, currentUserService) {
      $scope.tasks = [];
      $scope.addTask = function(title) {
        var id = tasksService.createTask(title);
        $scope.tasks.push({title: title, id: id});
        $scope.newTaskTitle = '';
      };
    }]
  };
});
