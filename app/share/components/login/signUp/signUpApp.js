require('./signUpService');
require('../../../services/currentUserService.js');
require('./assets/stylesheets/signUpStyle.css');

var app = angular.module('signUpApp', ['signUpServiceApp', 'currentUserServiceApp']);

app.directive('signUpModalDialog', function() {
  return {
    restrict: 'E',
    templateUrl: 'signUpView.html',
    controller: ['$scope', '$window', 'signUpService', 'currentUserService',
      function($scope, $window, signUpService, currentUserService) {
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
