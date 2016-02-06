require('../../../services/idGeneratorService.js');
require('../../../services/currentUserService.js');

var app = angular.module('tasksServiceApp', ['idGeneratorServiceApp', 'currentUserServiceApp']);

app.service('tasksService', ['$http', 'idGeneratorService', 'currentUserService',
function($http, idGeneratorService, currentUserService) {
  return {
    createTask: function(title) {
      var user = currentUserService.getUser(),
          id = idGeneratorService.getTaskId(title, user),
          currentList = currentUserService.getCurrentList();
      currentUserService.addTask(id, title);
      $http.post('/createTask', {title: title, id: id, list: currentList}).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
      return id;
    },
    deleteList: function(task) {
      currentUserService.deleteTask(task.id);
      $http.post('/deleteTask', task).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
    }
  };
}]);
