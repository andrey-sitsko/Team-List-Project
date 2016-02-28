User = require('../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      subTaskData = req.body;

  User.update(
    {
      'email': email
    },
    {
      $push: {
       'subTasks' : { title: subTaskData.title, id: subTaskData.id, taskId: subTaskData.taskId }
      }
    },
    false,
    function(response) {
      res.send(response);
    }
  );
};
