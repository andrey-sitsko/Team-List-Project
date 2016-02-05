require('../../../services/currentUserService.js');
require('./currentListService');

var app = angular.module('currentListApp', ['currentUserServiceApp', 'currentListServiceApp']);

app.directive('currentList', function() {
  return {
    restrict: 'E',
    templateUrl: 'currentListView.html',
    controller: ['$scope', 'currentUserService', 'currentListService', function($scope, currentUserService, currentListService) {
      $scope.tasks = [];
      $scope.addTask = function(taskName) {
        $scope.addTask = function(title) {
          $scope.tasks.push({title: title});
          $scope.newTaskTitle = '';
        };
      };
    }]
  };
});
