require('../../../services/currentUserService.js');

var app = angular.module('signUpServiceApp', ['currentUserServiceApp']);

app.service('signUpService', ['$http', '$window', 'currentUserService', function($http, $window, currentUserService) {

  function processSignUpResults(res) {
      if(res.data.success) {
        currentUserService.setUser(res.data.user);
        $window.location.href = '/main';
      } else {
        $('.sign-up-modal .alert-danger').show();
        $('#sign-up-password-group input').val('');
      }
  }

  return {
    signUp: function(authData) {
        $http.post('/signUp', authData).then(processSignUpResults);
    },
    setModalDialogParams: function() {
      $('.sign-up-modal .alert-danger').hide();
      $('#signUpModal').on('hidden.bs.modal', function () {
        $('.sign-up-modal .alert-danger').hide();
        $('.sign-up-modal .form-group input').val('');
      });
    }
  };
}]);
