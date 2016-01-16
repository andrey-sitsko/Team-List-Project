require('../../../services/loginService.js');
require('../../../services/userStorageService.js');

var app = angular.module('signUpApp', ['loginServiceApp', 'userStorageServiceApp']);

app.directive('signUpModalDialog', function() {
  return {
    restrict: 'E',
    templateUrl: 'signUpView.html',
    controller: ['$scope', '$window', 'loginService', 'userStorageService',
      function($scope, $window, loginService, userStorageService) {
      $scope.signUpName = '';
      $scope.signUpPassword = '';
      $scope.signUpEmail = '';
      $scope.alreadyExistWarning = false;
      $scope.submitSignUp = function() {
        loginService.signUp({name: $scope.signUpName, password: $scope.signUpPassword, email: $scope.signUpEmail}, function(res) {
          if(res.data.success) {
            userStorageService.set(res.data.user);
            $window.location.href = '/main';
          } else {
            $scope.alreadyExistWarning = true;
            $scope.signUpPassword = '';
          }
        });
      };
    }]
  };
});
