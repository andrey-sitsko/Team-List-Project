require('../../node_modules/angular/angular.min.js');
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../share/components/header/headerApp.js');
require('../share/components/userInfo/userInfoApp.js');

var app = angular.module('mainApp',  ['headerApp', 'userInfoApp']);

app.controller('styleController', ['$scope', function($scope) {
  $scope.stylesheets = [
    '../share/components/header/headerStyle.css',
    '../share/components/userInfo/userInfoStyle.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ];
}]);
