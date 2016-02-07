require('../../../services/currentUserService.js');
require('../lists/listsService.js');
require('./tasksService');

var app = angular.module('tasksApp', ['tasksServiceApp', 'currentUserServiceApp', 'listsServiceApp']);

app.directive('tasks', function() {
  return {
    restrict: 'E',
    templateUrl: 'tasksView.html',
    controller: ['$scope', 'tasksService', 'currentUserService', 'listsService',
    function($scope, tasksService, currentUserService, listsService) {
      $scope.tasks = [];
      listsService.passTaskSettingCallback(setTasks);
      $scope.deleteTask = function(task) {
        tasksService.deleteTask(task);
        $scope.tasks.splice($scope.tasks.map(function(task) {
          return task.id;
        }).indexOf(task.id), 1);
      };
      $scope.addTask = function(title) {
        var id = tasksService.createTask(title);
        $scope.tasks.push({title: title, id: id});
        $scope.newTaskTitle = '';
      };
      function setTasks(tasks) {
        $scope.tasks = tasks;
      }
    }]
  };
});
