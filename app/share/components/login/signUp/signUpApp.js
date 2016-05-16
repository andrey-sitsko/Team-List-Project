require('./signUpService');
require('./assets/stylesheets/signUpStyle.css');

var app = angular.module('loginApp');

app.directive('signUpModalDialog', function() {
  return {
    restrict: 'E',
    templateUrl: 'signUpView.html',
    controller: ['$scope', '$window', 'signUpService',
      function($scope, $window, signUpService) {
      $scope.signUpName = '';
      $scope.signUpPassword = '';
      $scope.signUpEmail = '';
      signUpService.setModalDialogParams();
      $scope.submitSignUp = function() {
        signUpService.signUp({name: $scope.signUpName, password: $scope.signUpPassword, email: $scope.signUpEmail});
      };
    }]
  };
});
