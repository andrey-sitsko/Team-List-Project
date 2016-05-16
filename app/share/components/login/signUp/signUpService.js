var app = angular.module('loginApp');

app.service('signUpService', ['$http', '$window', function($http, $window) {

  function processSignUpResults(res) {
      if(res.data.success) {
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
