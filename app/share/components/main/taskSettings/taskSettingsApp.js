require('./taskSettingsService.js');
require('../tasks/tasksService.js');
require('../lists/listsService.js');
require('./taskSettingsStyle.css');
require('./datepickerStyle.css');
require('jquery-ui');

var app = angular.module('mainApp'),
    months_en = require('../../../data/locales/months/months_en.js');

app.directive('taskSettings', function() {
  return {
    restrict: 'E',
    templateUrl: 'taskSettingsView.html',
    controller: (['$scope', '$http', 'idGeneratorService', 'taskSettingsService', 'tasksService', 'listsService',
    function($scope, $http, idGeneratorService, tasksService, listsService) {
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
            $http.post('/addDeadline', { date: { year: inst.currentYear, month: inst.currentMonth, day: inst.currentDay },
            taskId: $scope.currentTask.id }).then(function(res, err) {
              if(err) {
                throw err;
              }
            });
            showDatepickerDeleteIcon(true);
          }
        });
      });

      $('#noteInput').on('blur',function () {
        $scope.addNote($('#noteInput').val());
      });

      $scope.addNote = function(noteContent) {
        $scope.currentTask.note = noteContent;
        $('#noteInput').off('blur').blur();
        $('#noteInput').on('blur',function () {
          $scope.addNote($('#noteInput').val());
        });
      };

      $scope.addSubTask = function(title) {
        var id = idGeneratorService.getSubTaskId(title, $scope.user);
        $http.post('/createSubTask', { title: title, id: id, taskId: $scope.currentTask.id, listId: $scope.currentList.id }).then(function(res, err) {
          if(err) {
            throw err;
          }
        });
        $scope.currentSubTasks.push({ title: title, id: id, taskId: $scope.currentTask.id, listId: $scope.currentList.id });
        $scope.newSubTaskTitle = '';
      };

      $scope.deleteSubTask = function(subTask) {
        $scope.currentSubTasks.splice($scope.currentSubTasks.map(function(val) {
          return val.id;
        }).indexOf(subTask.id), 1);
        $scope.subTasks.splice($scope.subTasks.map(function(val) {
          return val.id;
        }).indexOf(subTask.id), 1);
        $http.post('/deleteSubTask', { id: subTask.id }).then(function(res, err) {
          if(err) {
            throw err;
          }
        });
      };

      $scope.deleteDeadline = function() {
        $scope.currentTask.deadline = null;
        $('#deadlineDatepicker').val('');
        showDatepickerDeleteIcon(false);
        $http.post('/addDeadline', { date: null, taskId: $scope.currentTask.id }).then(function(res, err) {
          if(err) {
            throw err;
          }
        });
      };

      function setTaskSettings(taskSettings) {
        deadline = taskSettings !== undefined ? taskSettings.deadline : '';
        if(deadline) {
          taskSettingsService.showDatepickerDeleteIcon(true);
          $('#deadlineDatepicker').datepicker( 'setDate', deadline && months_en[deadline.month] + ' ' + deadline.day + ', ' + deadline.year );
        } else {
          taskSettingsService.showDatepickerDeleteIcon(false);
          $('#deadlineDatepicker').val('');
        }
      }

      function showDatepickerDeleteIcon(state) {
        if(state) {
          $('#deleteDeadlineIcon').addClass('visible');
          $('#deadlineDatepicker').addClass('datepicker-padding');
        } else {
          $('#deleteDeadlineIcon').removeClass('visible');
          $('#deadlineDatepicker').removeClass('datepicker-padding');
        }
      }
    }])
  };
});
