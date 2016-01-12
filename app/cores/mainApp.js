require('../../node_modules/angular/angular.min.js');
require('../share/components/header/headerApp.js');

var app = angular.module('mainApp',  ['headerApp']);

app.controller('styleController', ['$scope', function($scope) {
  $scope.stylesheets = [
    '../share/components/header/headerStyle.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ];
}]);
