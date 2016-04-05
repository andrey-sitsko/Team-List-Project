var app = angular.module('mainApp');

app.service('tasksService', ['$http', 'idGeneratorService', 'currentUserService',
function($http, idGeneratorService, currentUserService) {
  var taskSettingsCallback;
  return {
    createTask: function(title) {
      var user = currentUserService.getUser(),
          id = idGeneratorService.getTaskId(title, user),
          currentList = currentUserService.getCurrentList();
      currentUserService.addTask(id, title);
      $http.post('/createTask', { title: title, id: id, listId: currentList.id }).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
      return id;
    },
    deleteTask: function(task) {
      var currentList = currentUserService.getCurrentList();
      currentUserService.deleteTask(task.id);
      if(currentUserService.getCurrentTask().id == task.id) {
        taskSettingsCallback();
      }
      $http.post('/deleteTask', { id: task.id }).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
    },
    checkTask: function(task, index) {
      currentUserService.setCurrentTask(task);
      taskSettingsCallback(currentUserService.getCurrentTaskSettings());
      $('.tasks-container .list-group-item').removeClass('checked-task');
      $('#task-' + index).addClass('checked-task');
    },
    setTaskSettingsCallback: function(callback) {
      taskSettingsCallback = callback;
    }
  };
}]);
