var app = angular.module('idGeneratorServiceApp', []);

app.service('idGeneratorService', function() {
  var id;

  this.getListId = function(title, user) {
    id = 'L' + '_' + user.email + '_' + title + '_' + getMiliseconds();
    return id;
  };

  this.getTaskId = function(title, user) {
    id = 'T' + '_' + user.email + '_' + title + '_' + getMiliseconds();
    return id;
  };

});

function getMiliseconds() {
  return (new Date()).valueOf().toString();
}
