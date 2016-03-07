require('../../../services/currentUserService.js');
require('../lists/listsService.js');
require('./tasksService');
require('./tasksStyle.css');

var app = angular.module('tasksApp', ['tasksServiceApp', 'currentUserServiceApp', 'listsServiceApp']);

app.directive('tasks', function() {
  return {
    restrict: 'E',
    templateUrl: 'tasksView.html',
    controller: ['$scope', 'tasksService', 'currentUserService', 'listsService',
    function($scope, tasksService, currentUserService, listsService) {
      listsService.setTasksCallback(setTasks);
      $scope.deleteTask = function(task) {
        tasksService.deleteTask(task);
        $scope.tasks.splice($scope.tasks.map(function(task) {
          return task.id;
        }).indexOf(task.id), 1);
      };
      $scope.addTask = function(title) {
        var id = tasksService.createTask(title);
        $scope.tasks.unshift({title: title, id: id});
        $scope.newTaskTitle = '';
      };
      $scope.checkTask = function(task) {
        tasksService.checkTask(task, $scope.tasks.indexOf(task));
      };
      function setTasks(tasks) {
        $scope.tasks = tasks;
      }
    }]
  };
});
