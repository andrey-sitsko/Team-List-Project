var app = angular.module('idGeneratorServiceApp', []);

app.service('idGeneratorService', function() {
  return {
    getListId: function(title, user) {
      id = 'L' + '_' + user.email + '_' + title + '_' + getRandomIdPart();
      return id;
    },
    getTaskId: function(title, user) {
      id = 'T' + '_' + user.email + '_' + title + '_' + getRandomIdPart();
      return id;
    },
    getSubTaskId: function(title, user) {
      id = 'ST' + '_' + user.email + '_' + title + '_' + getRandomIdPart();
      return id;
    }
  };
});

function getMiliseconds() {
  return (new Date()).valueOf().toString();
}

function getRandomIdPart() {
  var max = 1000,
      min = 0;
  return (getMiliseconds() + Math.random() * (max - min + 1) + min);
}
