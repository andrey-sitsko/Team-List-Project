require('../../../services/currentUserService.js');

var app = angular.module('signInServiceApp', ['currentUserServiceApp']);

app.service('signInService', ['$http', '$window', 'currentUserService', function($http, $window, currentUserService) {

  function processSignInResults(res) {
      if(res.data.success) {
        currentUserService.setUser(res.data.user);
        $window.location.href = '/main';
      } else {
        showWrongCredetiansAlert();
      }
  }

  function showWrongCredetiansAlert() {
      $('#sign-in-password-group input').val('');
      $('#sign-in-email-group').addClass('wrong-login-credetians');
      $('#sign-in-password-group').addClass('wrong-login-credetians');
      $('#wrong-login-credetians-message').addClass('show-login-tooltip');
      $('#wrong-login-credetians-message').on("animationend", function() {
        $('#sign-in-email-group').removeClass('wrong-login-credetians');
        $('#sign-in-password-group').removeClass('wrong-login-credetians');
        $('#wrong-login-credetians-message').removeClass('show-login-tooltip');
      });
  }

  return {
    signIn: function(authData, successCallback) {
      $http.post('/signIn', authData).then(processSignInResults);
    },
    facebookSignIn: function() {
      $http.get('/signIn/facebook').then(processSignInResults);
    }
  };


}]);
