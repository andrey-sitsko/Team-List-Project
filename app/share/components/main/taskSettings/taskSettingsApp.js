require('./taskSettingsService.js');

var app = angular.module('taskSettingsApp', ['taskSettingsServiceApp']);

app.directive('taskSettings', function() {
  return {
    restrict: 'E',
    templateUrl: 'taskSettingsView.html',
    controller: (['$scope', 'taskSettingsService', function($scope, taskSettingsService) {
      $scope.subTasks = [];
      $scope.addSubTask = function(title) {
        var id = taskSettingsService.createSubTask(title);
        $scope.subTasks.push({title: title, id: id});
        $scope.newSubTaskTitle = '';
      };
    }])
  };
});
