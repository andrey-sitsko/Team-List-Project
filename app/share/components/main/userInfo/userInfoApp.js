require('./userInfoStyle.css');

var app = angular.module('mainApp');

app.directive('userInfo', function() {
  return {
    restrict: 'E',
    templateUrl: 'userInfoView.html',
    controller: ['$scope', '$http', '$window', function($scope, $http, $window) {
      $scope.logout = function() {
        $http.get('/logout').then(function(res) {
          $window.location.href = '/';
        });
      };
      $scope.showAvatarPicker = function() {
        $('#avatarURL-input').toggleClass('avatarURL-input-show');        
      };
      $scope.setUserAvatar = function(url) {
        $scope.showAvatarPicker();
        $scope.user.avatarURL = url;
        $http.post('/addUserAvatar', { avatarURL: url }).then(function(res, err) {
          if(err) {
            throw err;
          }
        });
      };
    }]
  };
});
