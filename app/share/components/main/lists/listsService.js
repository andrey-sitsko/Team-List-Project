var app = angular.module('mainApp');

app.service('listsService', ['$http', 'idGeneratorService', 'currentUserService',
function($http, idGeneratorService, currentUserService) {
  var tasksCallback,
      taskSettingsCallback;
  return {
    /*checkList: function(list, index) {
      taskSettingsCallback();
      $('.lists-container .list-group-item').removeClass('checked-list');
      $('#list-' + index).addClass('checked-list');
    },
    createList: function(title, user) {
      var id = idGeneratorService.getListId(title, user);
      $http.post('/createList', {title: title, id: id}).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
      return id;
    },
    deleteList: function(list) {
      currentUserService.deleteList(list.id);
      if($scope.currentList.id == list.id) {
        $scope.currentTasks = [];
        $scope.currentTask = [];
        $scope.currentSubTasks = [];
        $scope.disableTaskSettings
      }
      $scope.user.lists.splice($scope.user.lists.map(function(list) {
        return list.id;
      }).indexOf(list.id), 1);
      $http.post('/deleteList', list).then(function(res, err) {
        if(err) {
          throw err;
        }
      });
    },*/
    setTasksCallback: function(callback) {
      tasksCallback = callback;
    },
    setTaskSettingCallback: function(callback) {
      taskSettingsCallback = callback;
    }
  };
}]);
