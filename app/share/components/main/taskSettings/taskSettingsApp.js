require('./taskSettingsService.js');
require('../tasks/tasksService.js');
require('../lists/listsService.js');

var app = angular.module('taskSettingsApp', ['taskSettingsServiceApp', 'tasksServiceApp', 'listsServiceApp']);

app.directive('taskSettings', function() {
  return {
    restrict: 'E',
    templateUrl: 'taskSettingsView.html',
    controller: (['$scope', 'taskSettingsService', 'tasksService', 'listsService',
    function($scope, taskSettingsService, tasksService, listsService) {
      $scope.subTasks = [];
      $scope.deadline = [];
      $scope.note = '';
      $scope.disableTaskSettings = true;
      tasksService.setTaskSettingsCallback(setTaskSettings);
      listsService.setTaskSettingCallback(setTaskSettings);
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
        $scope.disableTaskSettings = (taskSettings === undefined);
        $scope.subTasks = taskSettings && taskSettings.subTasks || [];
        $scope.deadline = taskSettings && taskSettings.deadline || '';
        $scope.note = taskSettings && taskSettings.note || '';
      }
    }])
  };
});
