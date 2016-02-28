User = require('../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      taskData = req.body;
  User.update(
    {
      'email': email,
    },
    {
      $push: {
       'tasks' : { title: taskData.title, id: taskData.id, listId: taskData.listId }
      }
    },
    false,
    function(response) {
      res.send(response);
    }
  );
};
