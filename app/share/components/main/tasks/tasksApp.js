require('./tasksStyle.css');

var app = angular.module('mainApp'),
    months_en = require('../../../data/locales/months/months_en.js');

app.directive('tasks', function() {
  return {
    restrict: 'E',
    templateUrl: 'tasksView.html',
    scope: false,
    controller: ['$scope', '$http', 'idGeneratorService',
    function($scope, $http, idGeneratorService) {
      $scope.deleteTask = function(task) {
        if($scope.currentTask.id == task.id) {
          $scope.currentTask = {};
          $scope.currentSubTasks = [];
          $scope.disableTaskSettings = true;
          $scope.datepickerDeleteIconVisibility = false;
          $scope.taskDeadline = '';
          $('#deadlineDatepicker').val('');
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
        $scope.disableTaskSettings = false;
        $scope.currentTask = $scope.user.tasks.filter(function(elem) {
          return elem.id == task.id;
        })[0];
        $scope.currentSubTasks = $scope.user.subTasks.filter(function(subTask) {
          return subTask.taskId == task.id;
        });
        if($scope.currentTask.deadline) {
          $scope.taskDeadline = months_en[$scope.currentTask.deadline.month] + ' ' +
          $scope.currentTask.deadline.day + ', ' + $scope.currentTask.deadline.year;
          $scope.datepickerDeleteIconVisibility = true;
        } else {
          $('#deadlineDatepicker').val('');
          $scope.taskDeadline = '';
          $scope.datepickerDeleteIconVisibility = false;
        }
        $('#noteInput').val($scope.currentTask.note);
        $('.tasks-container .list-group-item').removeClass('checked-task');
        $('#task-' + $scope.currentTasks.indexOf(task)).addClass('checked-task');
      };
    }]
  };
});
