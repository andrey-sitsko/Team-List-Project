require('../../../services/currentUserService.js');
require('../lists/listsService.js');
require('./tasksService');
require('./tasksStyle.css');

var app = angular.module('mainApp');

app.directive('tasks', function() {
  return {
    restrict: 'E',
    templateUrl: 'tasksView.html',
    scope: false,
    controller: ['$scope', '$http', 'idGeneratorService', 'tasksService', 'currentUserService', 'listsService',
    function($scope, $http, idGeneratorService, tasksService, currentUserService, listsService) {
      $scope.deleteTask = function(task) {
        if($scope.currentTask.id == task.id) {
          $scope.currentSubTasks = [];
          $scope.disableTaskSettings = true;
        }
        $scope.currentTasks.splice($scope.currentTasks.map(function(task) {
          return task.id;
        }).indexOf(task.id), 1);
        $scope.user.tasks.splice($scope.user.tasks.map(function(task) {
          return task.id;
        }).indexOf(task.id), 1);
        $http.post('/deleteTask', { id: task.id }).then(function(res, err) {
          if(err) {
            throw err;
          }
        });
      };
      $scope.addTask = function(title) {
        var id = idGeneratorService.getTaskId(title, $scope.user);
        $scope.user.tasks.unshift({title: title, id: id, listId: $scope.currentList.id });
        $scope.currentTasks.unshift({title: title, id: id, listId: $scope.currentList.id });
        $scope.newTaskTitle = '';
        $http.post('/createTask', { title: title, id: id, listId: $scope.currentList.id }).then(function(res, err) {
          if(err) {
            throw err;
          }
        });
      };
      $scope.checkTask = function(task) {
        $scope.currentTask = $scope.user.tasks.filter(function(elem) {
          return elem.id == task.id;
        })[0];
        $scope.currentSubTasks = $scope.user.subTasks.filter(function(subTask) {
          return subTask.taskId == task.id;
        });
        $('.tasks-container .list-group-item').removeClass('checked-task');
        $('#task-' + $scope.currentTasks.indexOf(task)).addClass('checked-task');
      };
    }]
  };
});
