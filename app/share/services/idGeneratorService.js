var app = angular.module('idGeneratorServiceApp', []);

app.service('idGeneratorService', function() {
  return {
    getListId: function(title, user) {
      id = 'L' + '_' + user.email + '_' + title + '_' + getMiliseconds();
      return id;
    },
    getTaskId: function(title, user) {
      id = 'T' + '_' + user.email + '_' + title + '_' + getMiliseconds();
      return id;
    },
    getSubTaskId: function(title, user) {
      id = 'ST' + '_' + user.email + '_' + title + '_' + getMiliseconds();
      return id;
    }
  };
});

function getMiliseconds() {
  return (new Date()).valueOf().toString();
}
