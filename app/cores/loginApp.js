require('../../node_modules/angular/angular.min.js');
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../share/components/login/signUp/signUpApp.js');
require('../share/components/login/signIn/signInApp.js');
require('../share/components/common/header/headerApp.js');

var app = angular.module('loginApp', ['signInApp', 'signUpApp', 'headerApp']);

app.controller('styleController', ['$scope', function($scope) {
  $scope.stylesheets = [
    '../share/assets/stylesheets/resetStyle.css',
    '../share/components/login/signUp/signUpStyle.css',
    '../share/components/login/signIn/signInStyle.css',
    '../share/components/login/signIn/fonts.css',
    '../share/components/common/header/headerStyle.css',
    '../share/assets/stylesheets/loginStyle.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../node_modules/bootstrap-social/bootstrap-social.css',
    '../../node_modules/font-awesome/css/font-awesome.min.css'
  ];
}]);
