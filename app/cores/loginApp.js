require('../../node_modules/angular/angular.min.js');
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../components/signUp/signUpApp.js');
require('../components/signIn/signInApp.js');
require('../components/header/headerApp.js');

var app = angular.module('loginApp', ['signInApp', 'signUpApp', 'headerApp']);

app.controller('styleController', ['$scope', function($scope) {
  $scope.stylesheets = [
    '../components/signUp/signUpStyle.css',
    '../components/signIn/signInStyle.css',
    '../components/header/headerStyle.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ];
}]);
