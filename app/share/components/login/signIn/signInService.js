var app = angular.module('loginApp');

app.service('signInService', ['$http', '$window', function($http, $window) {

  function processLocalSignInResults(res) {
      if(res.data.success) {
        $window.location.href = '/main';
      } else {
        showWrongCredetiansAlert();
      }
  }

  function processSocialSignInResults(res) {
    if(res.success) {
      $window.location.href = '/main';
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
      $http.post('/signIn', authData).then(processLocalSignInResults);
    },
    facebookSignIn: function() {
      $http.get('/signIn/facebook').then(processSocialSignInResults);
    },
    googleSignIn: function() {
      $http.jsonp('/signIn/google?callback=SOCIAL_AUTH_JSON_CALLBACK');
    }
  };


}]);
