var app = angular.module('mainApp');

app.service('taskSettingsService', ['$http', 'idGeneratorService', 'currentUserService',
function($http, idGeneratorService, currentUserService) {
  return {
    createSubTask: function(title) {
      var user = currentUserService.getUser(),
          id = idGeneratorService.getSubTaskId(title, user),
          currentList = currentUserService.getCurrentList(),
          currentTask = currentUserService.getCurrentTask();
      currentUserService.addSubTask(id, title);
      $http.post('/createSubTask', { title: title, id: id, taskId: currentTask.id, listId: currentList.id }).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
      return id;
    },
    deleteSubTask: function(subTask) {
      var currentTask = currentUserService.getCurrentTask();
      currentUserService.deleteSubTask(subTask.id);
      $http.post('/deleteSubTask', { id: subTask.id }).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
    },
    addDeadline: function(date) {
      var currentTask = currentUserService.getCurrentTask();
      $http.post('/addDeadline', { date: date, taskId: currentTask.id }).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
      currentUserService.addDeadline(date);
    },
    deleteDeadline: function() {
      var currentTask = currentUserService.getCurrentTask();
      $http.post('/addDeadline', { date: null, taskId: currentTask.id }).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
      $('#deadlineDatepicker').val('');
      currentUserService.addDeadline(null);
    },
    addNote: function(noteContent) {
      var currentTask = currentUserService.getCurrentTask();
      $http.post('/addNote', { note: noteContent, taskId: currentTask.id }).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
      currentUserService.addNote(noteContent);
    },
    showDatepickerTrashIcon: function(state) {
      if(state) {
        $('#deleteDeadlineIcon').addClass('visible');
      } else {
        $('#deleteDeadlineIcon').removeClass('visible');
      }
    }
  };
}]);
