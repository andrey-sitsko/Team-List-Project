require('./taskSettingsService.js');
require('../tasks/tasksService.js');

var app = angular.module('taskSettingsApp', ['taskSettingsServiceApp', 'tasksServiceApp']);

app.directive('taskSettings', function() {
  return {
    restrict: 'E',
    templateUrl: 'taskSettingsView.html',
    controller: (['$scope', 'taskSettingsService', 'tasksService', function($scope, taskSettingsService, tasksService) {
      $scope.subTasks = [];
      $scope.deadline = [];
      $scope.note = '';
      tasksService.setTaskSettingsCallback(setTaskSettings);
      $scope.addSubTask = function(title) {
        var id = taskSettingsService.createSubTask(title);
        $scope.subTasks.push({title: title, id: id});
        $scope.newSubTaskTitle = '';
      };
      $scope.deleteSubTask = function(subTask) {
        taskSettingsService.deleteSubTask(subTask);
        $scope.subTasks.splice($scope.subTasks.map(function(val) {
          return val.id;
        }).indexOf(subTask.id), 1);
      };
      function setTaskSettings(taskSettings) {
        $scope.subTasks = taskSettings.subTasks || [];
        $scope.deadline = taskSettings.deadline || '';
        $scope.note = taskSettings.note || '';
      }
    }])
  };
});
