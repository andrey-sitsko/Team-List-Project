require('../../node_modules/angular/angular.min.js');
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../share/components/common/header/headerApp.js');
require('../share/components/main/userInfo/userInfoApp.js');

var app = angular.module('mainApp',  ['headerApp', 'userInfoApp']);

app.controller('styleController', ['$scope', function($scope) {
  $scope.stylesheets = [
    '../share/components/common/header/headerStyle.css',
    '../share/components/main/userInfo/userInfoStyle.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ];
}]);
