require('../../../services/idGeneratorService.js');
require('../../../services/currentUserService.js');

var app = angular.module('listsServiceApp', ['idGeneratorServiceApp', 'currentUserServiceApp']);

app.service('listsService', ['$http', 'idGeneratorService', 'currentUserService',
function($http, idGeneratorService, currentUserService) {
  var taskSettingCallback;
  return {
    checkList: function(list, index) {
      currentUserService.setCurrentList(list);
      taskSettingCallback(currentUserService.getListTasks(list));
      $('.lists-container .list-group-item').removeClass('checked-list');
      $('#list-' + index).addClass('checked-list');
    },
    createList: function(title, user) {
      var id = idGeneratorService.getListId(title, user);
      currentUserService.addList(id, title);
      $http.post('/createList', {title: title, id: id}).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
      return id;
    },
    deleteList: function(list) {
      currentUserService.deleteList(list.id);
      if(currentUserService.getCurrentList().id == list.id) {
        taskSettingCallback();
      }
      $http.post('/deleteList', list).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
    },
    passTaskSettingCallback: function(callback) {
      taskSettingCallback = callback;
    }
  };
}]);
