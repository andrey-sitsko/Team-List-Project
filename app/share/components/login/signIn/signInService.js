require('../../../services/currentUserService.js');

var app = angular.module('loginApp');

app.service('signInService', ['$http', '$window', 'currentUserService', function($http, $window, currentUserService) {

  function processSignInResults(res) {
    console.log('processSignInResults');
      if(res.data.success) {
        currentUserService.setUser(res);
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
      /*window.JSON_CALLBACK = function(res) {
        console.log(res);
      };*/

      $http.jsonp('/signIn/facebook?callback=processSignInResults');
      //$.get('/signIn/facebook').then(processSignInResults);
    }
  };


}]);
