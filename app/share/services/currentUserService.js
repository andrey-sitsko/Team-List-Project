require('../../../node_modules/angular-local-storage/dist/angular-local-storage.min.js');

var app = angular.module('currentUserServiceApp', ['LocalStorageModule']);

app.service('currentUserService', ['$http', 'localStorageService', function($http, localStorageService) {
  return {
    setUser: function(newUser) {
      localStorageService.set('user', newUser);
    },
    getUser: function() {
      return localStorageService.get('user');
    },
    addTask: function(id, title) {
      var user,
          currentList;
      user = localStorageService.get('user');
      currentList = localStorageService.get('currentList');
      if(user && currentList) {
        user.tasks.push({ title: title, id: id, listId: currentList.id });
      }
      localStorageService.set('user', user);
    },
    deleteTask: function(id) {
      var user,
          currentList,
          index;
      user = localStorageService.get('user');
      currentList = localStorageService.get('currentList');
      index = user.tasks.map(function(task) {
        return task.id;
      }).indexOf(id);
      if(user && index >= 0) {
        user.tasks.splice(index, 1);
      }
      localStorageService.set('user', user);
    },
    setCurrentTask: function(task) {
      localStorageService.set('currentTask', task);
    },
    setCurrentList: function(list) {
      localStorageService.set('currentList', list);
    },
    getCurrentList: function() {
      return localStorageService.get('currentList');
    },
    getCurrentTask: function() {
      return localStorageService.get('currentTask');
    },
    getListTasks: function(list) {
      var user;
      user = localStorageService.get('user');
      return user.tasks.filter(function(task) {
        return task.listId == list.id;
      });
    },
    addList: function(id, title) {
      var user;
      user = localStorageService.get('user');
      if(user) {
        user.lists.push({ title: title, id: id });
      }
      localStorageService.set('user', user);
     },
    deleteList: function(id) {
     var user;
     user = localStorageService.get('user');
     if(user) {
       user.lists.splice(user.lists.map(function(list) {
         return list.id;
       }).indexOf(id), 1);
       localStorageService.set('user', user);
     }
   },
   addSubTask: function(id, title) {
     var user,
         currentTask;
     user = localStorageService.get('user');
     currentTask = localStorageService.get('currentTask');
     if(user && currentTask) {
       user.subTasks.push({ title: title, id: id, taskId: currentTask.id });
     }
     localStorageService.set('user', user);
   },
   deleteSubTask: function(id) {
     var user,
         currentTask,
         index;
     user = localStorageService.get('user');
     currentTask = localStorageService.get('currentTask');
     index = user.subTasks.map(function(subTask) {
       return subTask.id;
     }).indexOf(id);
     if(user && index >= 0) {
       user.subTasks.splice(index, 1);
     }
     localStorageService.set('user', user);
   },
   addDeadline: function(date) {
     var user,
         currentTaskId,
         currentTask;
     user = localStorageService.get('user');
     currentTaskId = localStorageService.get('currentTask').id;
     currentTask = user.tasks.filter(function(task) {
       return task.id == currentTaskId;
     })[0];
    currentTask.deadline = date;
    localStorageService.set('user', user);
   },
   getCurrentTaskSettings: function() {
     var user,
         currentTask,
         currentTaskId,
         subTasks,
         taskIndex;
     user = localStorageService.get('user');
     currentTaskId = localStorageService.get('currentTask').id;
     currentTask = user.tasks.filter(function(task) {
       return task.id == currentTaskId;
     })[0];
     subTasks = user.subTasks.filter(function(subTask) {
       return subTask.taskId == currentTaskId;
     });

     return {
       subTasks: subTasks,
       deadline: currentTask.deadline,
       note: currentTask.note
     };
   }
  };
}]);
