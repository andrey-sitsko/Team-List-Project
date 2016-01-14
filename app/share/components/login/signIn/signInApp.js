require('../../../services/loginService.js');

var app = angular.module('signInApp', ['loginServiceApp']);

app.directive('signInForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'signInView.html',
    controller: ['$scope','$window', 'loginService', function($scope, $window, loginService) {
      $scope.signInPassword = '';
      $scope.signInEmail = '';
      $scope.submitSignIn = function() {
        loginService.signIn({email: $scope.signInEmail, password: $scope.signInPassword}, function (res) {
          if(res.data.success) {
            $window.location.href = '/main';
          } else {
            $scope.signInPassword = '';
            $('#sign-in-email').addClass('wrong-login-credetians');
            $('#sign-in-password').addClass('wrong-login-credetians');
            $('#wrong-login-credetians-message').addClass('show-login-tooltip');
            $('#wrong-login-credetians-message').on("animationend", function() {
              $('#wrong-login-credetians-message').removeClass('show-login-tooltip');
              $('#wrong-login-credetians-message').addClass('hide-login-tooltip');
              $('#wrong-login-credetians-message').on("animationend", function() {
                $('#sign-in-email').removeClass('wrong-login-credetians');
                $('#sign-in-password').removeClass('wrong-login-credetians');
                $('#wrong-login-credetians-message').removeClass('hide-login-tooltip');
              });
            });
          }
        });
      };
    }]
  };
});
