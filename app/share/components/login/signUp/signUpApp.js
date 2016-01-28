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
      $('.sign-up-modal .alert-danger').hide();
      $('#signUpModal').on('hidden.bs.modal', function () {
        $('.sign-up-modal .alert-danger').hide();
        $('.sign-up-modal .form-group input').val('');
      });
      $scope.submitSignUp = function() {
        loginService.signUp({name: $scope.signUpName, password: $scope.signUpPassword, email: $scope.signUpEmail},
          loginService.processSignUpResults);
      };
    }]
  };
});
