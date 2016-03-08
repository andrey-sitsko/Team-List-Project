require('angular');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../node_modules/font-awesome/css/font-awesome.min.css');
require('../../node_modules/bootstrap-social/bootstrap-social.css');
require('../share/assets/stylesheets/loginStyle.css');
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../share/components/login/signUp/signUpApp.js');
require('../share/components/login/signIn/signInApp.js');
require('../share/components/common/pageHeader/pageHeaderApp.js');

var app = angular.module('loginApp', ['signInApp', 'signUpApp', 'pageHeaderApp']);
