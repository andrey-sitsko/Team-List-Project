require('angular');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../node_modules/font-awesome/css/font-awesome.min.css');
require('../../node_modules/bootstrap-social/bootstrap-social.css');
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../share/assets/stylesheets/loginStyle.css');

var app = angular.module('loginApp', []);

require('../share/components/login/signUp/signUpApp.js');
require('../share/components/login/signIn/signInApp.js');
