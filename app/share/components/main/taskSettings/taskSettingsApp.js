require('./taskSettingsService.js');
require('../tasks/tasksService.js');
require('../lists/listsService.js');
require('./taskSettingsStyle.css');
require('./datepickerStyle.css');
require('jquery-ui');

var app = angular.module('taskSettingsApp', ['taskSettingsServiceApp', 'tasksServiceApp', 'listsServiceApp']),
    months_en = require('../../../data/locales/months/months_en.js');

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
        $("#deadlineDatepicker").datepicker({
          dateFormat: 'MM dd, yy',
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
            taskSettingsService.addDeadline({ year: inst.currentYear, month: inst.currentMonth, day: inst.currentDay });
            $('.deadline-form').addClass('task-settings-form-blink');
            $('.deadline-form').on('animationend', function() {
              $('.deadline-form').removeClass('task-settings-form-blink');
            });
          }
        });
      });
      $('#noteInput').on('blur',function () {
        $scope.addNote($('#noteInput').val());
      });
      $scope.addNote = function(noteContent) {
        taskSettingsService.addNote(noteContent);
        $scope.note = noteContent;
        $('.note-form').addClass('task-settings-form-blink');
        $('.note-form').on('animationend', function() {
          $('.note-form').removeClass('task-settings-form-blink');
        });
        $('#noteInput').off('blur').blur();
        $('#noteInput').on('blur',function () {
          $scope.addNote($('#noteInput').val());
        });
      };
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
        var deadline;
        if(taskSettings === undefined) {
          $scope.disableTaskSettings = true;
          return;
        }
        $scope.disableTaskSettings = false;
        deadline = taskSettings.deadline;
        $scope.subTasks = taskSettings.subTasks || [];
        $scope.note = taskSettings.note || '';
        $('#deadlineDatepicker').datepicker( 'setDate', deadline && months_en[deadline.month] + ' ' + deadline.day + ', ' + deadline.year );
      }
    }])
  };
});
