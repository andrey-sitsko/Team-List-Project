require('../../../services/idGeneratorService.js');

var app = angular.module('currentListServiceApp', ['idGeneratorServiceApp']);

app.service('currentListService', ['$http', 'idGeneratorService', function($http, idGeneratorService) {
  return {
    createTask: function(title, user) {
      var id = idGeneratorService.getListId(title, user);

      return id;
    }
  };
}]);
