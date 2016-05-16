require('angular');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../node_modules/font-awesome/css/font-awesome.min.css');
require('../share/services/idGeneratorService.js');
require('../share/assets/stylesheets/mainStyle.css');
require('../share/assets/stylesheets/resetStyle.css');

var app = angular.module('mainApp',  ['idGeneratorServiceApp']);

app.controller('mainPageController', ['$scope', '$http', function($scope, $http) {
  $scope.disableTaskSettings = true;
  $scope.disableTasks = true;
  $scope.currentList = {};
  $scope.currentTasks = [];
  $scope.currentTask = {};
  $scope.currentSubTasks = [];
  $scope.taskDeadline = "";
  $scope.datepickerDeleteIconVisibility = false;
  $http.get('/currentUser').then(function(res) {
    $scope.user = res.data;
    $scope.user.lists.reverse();
    $scope.user.tasks.reverse();
    $scope.user.subTasks.reverse();
  });
}]);

require('../share/components/main/userInfo/userInfoApp.js');
require('../share/components/main/lists/listsApp.js');
require('../share/components/main/taskSettings/taskSettingsApp.js');
require('../share/components/main/tasks/tasksApp.js');
