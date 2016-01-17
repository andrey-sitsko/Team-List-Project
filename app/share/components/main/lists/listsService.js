require('../../../services/idGeneratorService.js');

var app = angular.module('listsServiceApp', ['idGeneratorServiceApp']);

app.service('listsService', ['$http', 'idGeneratorService', function($http, idGeneratorService) {
  return {
    createList: function(title, user) {
      var id = idGeneratorService.getListId(title, user);
      $http.post('/createList', {title: title, id: id});
    }
  };
}]);
