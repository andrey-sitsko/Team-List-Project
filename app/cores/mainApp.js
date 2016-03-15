require('../../node_modules/angular/angular.min.js');
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../share/components/main/userInfo/userInfoApp.js');
require('../share/components/main/lists/listsApp.js');
require('../share/components/main/taskSettings/taskSettingsApp.js');
require('../share/components/main/tasks/tasksApp.js');

var app = angular.module('mainApp',  ['userInfoApp', 'listsApp', 'tasksApp', 'taskSettingsApp']);

app.controller('styleController', ['$scope', function($scope) {
  $scope.stylesheets = [
    '../share/assets/stylesheets/resetStyle.css',
    '../share/components/main/userInfo/userInfoStyle.css',
    '../share/components/main/lists/listsStyle.css',
    '../share/components/main/taskSettings/taskSettingsStyle.css',
    '../share/components/main/tasks/tasksStyle.css',
    '../share/assets/stylesheets/mainStyle.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../node_modules/font-awesome/css/font-awesome.min.css'
  ];
}]);
