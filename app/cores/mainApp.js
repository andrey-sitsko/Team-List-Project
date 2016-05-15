require('angular');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../node_modules/font-awesome/css/font-awesome.min.css');
require('../share/services/currentUserService.js');
require('../share/services/idGeneratorService.js');
require('../share/assets/stylesheets/mainStyle.css');
require('../share/assets/stylesheets/resetStyle.css');

var app = angular.module('mainApp',  ['idGeneratorServiceApp', 'currentUserServiceApp']);

app.controller('mainPageController', ['$scope', '$http', 'currentUserService', function($scope, $http, currentUserService) {
  $http.get('/currentUser').then(function(res) {
    $scope.user = res.data;
    $scope.currentTasks = [];
    $scope.currentTask = {};
    $scope.currentSubTasks = [];
    $scope.disableTaskSettings = true;
    $scope.disableTasks = true;
  });
}]);

require('../share/components/main/userInfo/userInfoApp.js');
require('../share/components/main/lists/listsApp.js');
require('../share/components/main/taskSettings/taskSettingsApp.js');
require('../share/components/main/tasks/tasksApp.js');
