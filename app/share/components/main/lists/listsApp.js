require('../../../services/currentUserService.js');
require('./listsService.js');
require('./listsStyle.css');

var app = angular.module('mainApp');

app.directive('lists', function() {
  return {
    restrict: 'E',
    templateUrl: 'listsView.html',
    scope: false,
    controller: ['$scope', '$http','currentUserService','idGeneratorService',
    function($scope, $http, currentUserService, idGeneratorService) {
      $scope.addList = function(title) {
        var id = idGeneratorService.getListId(title, $scope.user);
        $scope.user.lists.unshift({title: title, id: id});
        $http.post('/createList', {title: title, id: id}).then(function(res, err) {
          if(err) {
            throw err;
          }
        });
        $scope.newListTitle = '';
      };
      $scope.deleteList = function(list) {
        if($scope.currentList.id && $scope.currentList.id == list.id) {
          $scope.currentTasks = [];
          $scope.currentTask = [];
          $scope.currentSubTasks = [];
          $scope.disableTaskSettings = true;
          $scope.disableTasks = true;
        }
        $scope.user.lists.splice($scope.user.lists.map(function(list) {
          return list.id;
        }).indexOf(list.id), 1);
        $http.post('/deleteList', list).then(function(res, err) {
          if(err) {
            throw err;
          }
        });
      };
      $scope.checkList = function(list) {
        if(!$scope.currentList.id || $scope.currentList.id != list.id) {
          $scope.currentList = list;
          $scope.currentTasks = $scope.user.tasks.filter(function(task) {
            return task.listId == list.id;
          });
          $scope.disableTasks = false;
          $scope.disableTaskSettings = true;
          $scope.currentSubTasks = [];
          $scope.taskDeadline = '';
          $('#deadlineDatepicker').val('');
          $scope.datepickerDeleteIconVisibility = false;
          $('.lists-container .list-group-item').removeClass('checked-list');
          $('#list-' + $scope.user.lists.indexOf(list)).addClass('checked-list');
        }
      };
    }]
  };
});
