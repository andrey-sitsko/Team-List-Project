require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../node_modules/font-awesome/css/font-awesome.min.css');
require('../share/assets/stylesheets/mainStyle.css');
require('../../node_modules/angular/angular.min.js');
require('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../share/components/common/header/headerApp.js');
require('../share/components/main/userInfo/userInfoApp.js');
require('../share/components/main/lists/listsApp.js');
require('../share/components/main/taskSettings/taskSettingsApp.js');
require('../share/components/main/tasks/tasksApp.js');

var app = angular.module('mainApp',  ['headerApp', 'userInfoApp', 'listsApp', 'tasksApp', 'taskSettingsApp']);
