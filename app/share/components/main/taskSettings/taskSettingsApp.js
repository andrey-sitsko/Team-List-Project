require('./taskSettingsService.js');
require('../tasks/tasksService.js');

var app = angular.module('taskSettingsApp', ['taskSettingsServiceApp', 'tasksServiceApp']);

app.directive('taskSettings', function() {
  return {
    restrict: 'E',
    templateUrl: 'taskSettingsView.html',
    controller: (['$scope', 'taskSettingsService', 'tasksService', function($scope, taskSettingsService, tasksService) {
      $scope.subTasks = [];
      tasksService.setSubTasksSettingCallback(setSubTasks);
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
      function setSubTasks(subTasks) {
        $scope.subTasks = subTasks;
      }
    }])
  };
});
