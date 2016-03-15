require('../../node_modules/angular/angular.min.js');
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../share/components/login/signUp/signUpApp.js');
require('../share/components/login/signIn/signInApp.js');

var app = angular.module('loginApp', ['signInApp', 'signUpApp']);

app.controller('styleController', ['$scope', function($scope) {
  $scope.stylesheets = [
    '../share/assets/stylesheets/resetStyle.css',
    '../share/components/login/signUp/assets/stylesheets/signUpStyle.css',
    '../share/components/login/signIn/assets/stylesheets/signInStyle.css',
    '../share/components/login/signIn/assets/stylesheets/fonts.css',
    '../share/assets/stylesheets/loginStyle.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../node_modules/bootstrap-social/bootstrap-social.css',
    '../../node_modules/font-awesome/css/font-awesome.min.css'
  ];
}]);
