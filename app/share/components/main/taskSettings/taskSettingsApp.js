var app = angular.module('taskSettingsApp', []);

app.directive('taskSettings', function() {
  return {
    restrict: 'E',
    templateUrl: 'taskSettingsView.html'
  };
});
