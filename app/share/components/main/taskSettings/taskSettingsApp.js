require('./taskSettingsService.js');
require('../tasks/tasksService.js');
require('../lists/listsService.js');
require('./taskSettingsStyle.css');
require('./datepickerStyle.css');
require('jquery-ui');

var app = angular.module('taskSettingsApp', ['taskSettingsServiceApp', 'tasksServiceApp', 'listsServiceApp']);

app.directive('taskSettings', function() {
  return {
    restrict: 'E',
    templateUrl: 'taskSettingsView.html',
    controller: (['$scope', 'taskSettingsService', 'tasksService', 'listsService',
    function($scope, taskSettingsService, tasksService, listsService) {
      $scope.subTasks = [];
      $scope.note = '';
      $scope.disableTaskSettings = true;
      tasksService.setTaskSettingsCallback(setTaskSettings);
      listsService.setTaskSettingCallback(setTaskSettings);
      $(function() {
        var dateToday = new Date();
        $( "#deadlineDatepicker" ).datepicker({
          dateFormat: 'dd-M-yy',
          clearBtn: true,
          todayHighlight: true,
          minDate: dateToday,
          beforeShow: function (input, inst) {
            $('.deadline-form').append(inst.dpDiv);
            setTimeout(function () {
              inst.dpDiv.css({
                  top: '40px',
                  left: 0
              });
            }, 0);
          },
          onSelect: function(dateText, inst) {
            taskSettingsService.addDeadline(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
          }
        });
      });
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
        $scope.note = taskSettings && taskSettings.note || '';
        $('#deadlineDatepicker').val(taskSettings && taskSettings.deadline || '');
      }
    }])
  };
});
