require('../../../node_modules/angular-local-storage/dist/angular-local-storage.min.js');

var app = angular.module('currentUserServiceApp', ['LocalStorageModule']);

app.service('currentUserService', ['$http', 'localStorageService', function($http, localStorageService) {
  return {
    setCurrentList: function(list) {
      localStorageService.set('currentList', list);
    },
    getCurrentList: function() {
      return localStorageService.get('currentList');
    },
    setUser: function(newUser) {
      localStorageService.set('user', newUser);
    },
    getUser: function() {
      return localStorageService.get('user');
    },
    addTask: function(id, title) {
      var user = localStorageService.get('user'),
          index = user.lists.map(function(e) {
             return e.id;
          }).indexOf(localStorageService.get('currentList').id);
      if(user && index >= 0) {
        user.lists[index].tasks.push({title: title, id: id});
      }
      localStorageService.set('user', user);
    },
    deleteTask: function(id) {
      var user = localStorageService.get('user'),
          currentList = localStorageService.get('currentList'),
          index = user.lists.map(function(e) {
            return e.id;
          }).indexOf(currentList.id);
      if(user && index >= 0) {
        user.lists[index].tasks.splice(user.lists[index].tasks.map(function(task) {
          return task.id;
        }).indexOf(id), 1);
      }
      localStorageService.set('user', user);
    },
    setCurrentTask: function(task) {
      localStorageService.set('currentTask', task);
    },
    getListTasks: function(list) {
      var user = localStorageService.get('user'),
          index = user.lists.map(function(e) {
             return e.id;
          }).indexOf(list.id);
      return user.lists[index].tasks;
    },
    addList: function(id, title) {
      var user = localStorageService.get('user');
      if(user) {
        user.lists.push({title: title, id: id, tasks: []});
      }
      localStorageService.set('user', user);
     },
     deleteList: function(id) {
       var user = localStorageService.get('user');
       if(user) {
         user.lists.splice(user.lists.map(function(list) {
           return list.id;
         }).indexOf(id), 1);
         localStorageService.set('user', user);
       }
    }
  };
}]);
