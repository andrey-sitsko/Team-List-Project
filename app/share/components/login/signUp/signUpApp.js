require('../../../services/loginService.js');

var app = angular.module('signUpApp', ['loginServiceApp']);

app.directive('signUpModalDialog', function() {
  return {
    restrict: 'E',
    templateUrl: 'signUpView.html',
    controller: ['$scope', '$window', 'loginService', function($scope, $window, loginService) {
      $scope.signUpName = '';
      $scope.signUpPassword = '';
      $scope.signUpEmail = '';
      $scope.alreadyExistWarning = false;
      $scope.submitSignUp = function() {
        loginService.signUp({name: $scope.signUpName, password: $scope.signUpPassword, email: $scope.signUpEmail}, function(res) {
          if(res.data.success) {
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
