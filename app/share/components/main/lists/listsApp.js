require('../../../services/userStorageService.js');
require('./listsService.js');

var app = angular.module('listsApp', ['listsServiceApp', 'userStorageServiceApp']);

app.directive('lists', function() {
  return {
    restrict: 'E',
    templateUrl: 'listsView.html',
    controller: ['$scope', 'listsService', 'userStorageService', function($scope, listsService, userStorageService) {
      var user = userStorageService.get();
      $scope.lists = user.lists;
      $scope.addList = function(title) {
        listsService.createList(title, user);
        $scope.lists.push({title: title});
        $scope.newListTitle = '';
      };
    }]
  };
});
