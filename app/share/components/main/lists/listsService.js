require('../../../services/idGeneratorService.js');
require('../../../services/userStorageService.js');

var app = angular.module('listsServiceApp', ['idGeneratorServiceApp', 'userStorageServiceApp']);

app.service('listsService', ['$http', 'idGeneratorService', 'userStorageService',
function($http, idGeneratorService, userStorageService) {
  return {
    createList: function(title, user) {
      var id = idGeneratorService.getListId(title, user);
      $http.post('/createList', {title: title, id: id}).then(function(res) {
        userStorageService.addList(id, title);
      });
      return id;
    },
    deleteList: function(list) {
      $http.post('/deleteList', list).then(function(res) {
        console.log(res);
        userStorageService.deleteList(list.id);
      });
    }
  };
}]);
