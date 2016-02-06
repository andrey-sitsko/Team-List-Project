require('../../../node_modules/angular-local-storage/dist/angular-local-storage.min.js');

var app = angular.module('currentUserServiceApp', ['LocalStorageModule']);

app.service('currentUserService', ['$http', 'localStorageService', function($http, localStorageService) {

  this.setCurrentList = function(list) {
    localStorageService.set('currentList', list);
  };

  this.getCurrentList = function() {
    return localStorageService.get('currentList');
  };

  this.setUser = function(newUser) {
    localStorageService.set('user', newUser);
  };

  this.getUser = function() {
    return localStorageService.get('user');
 };

 this.addTask = function(id, title) {
   var user = localStorageService.get('user'),
       index = user.lists.indexOf(localStorageService.get('currentList'));
   if(user && index > 0) {
     user.lists[index].push({title: title, id: id});
   }
   localStorageService.set('user', user);
 };

 this.deleteTask = function(id) {
   var user = localStorageService.get('user'),
       index = user.lists.indexOf(localStorageService.get('currentList'));
   if(user && index > 0) {
     user.lists[index].splice(user.lists[index].map(function(task) {
       return task.id;
     }).indexOf(id), 1);
   }
   localStorageService.set('user', user);
 };

 this.addList = function(id, title) {
   var user = localStorageService.get('user');
   if(user) {
     user.lists.push({title: title, id: id, tasks: []});
   }
   localStorageService.set('user', user);
 };

 this.deleteList = function(id) {
   var user = localStorageService.get('user');
   if(user) {
     user.lists.splice(user.lists.map(function(list) {
       return list.id;
     }).indexOf(id), 1);
     localStorageService.set('user', user);
   }
 };

}]);
