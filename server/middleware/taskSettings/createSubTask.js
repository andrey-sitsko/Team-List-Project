User = require('../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      subTaskData = req.body;

  User.update(
    {
      'email': email,
      'lists.id': subTaskData.listId,
      'tasks.id': subTaskData.taskId
    },
    {
      $push: {
       'tasks.$.subTasks' : { title: subTaskData.title, id: subTaskData.id }
      }
    },
    false,
    function(response) {
      res.send(response);
    }
  );
};
