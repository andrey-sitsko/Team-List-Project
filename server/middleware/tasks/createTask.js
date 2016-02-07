User = require('../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      taskData = req.body;
  User.update(
    {
      'email': email,
      'lists.id': taskData.list.id
    },
    {
      $push: {
       'lists.$.tasks' : { title: taskData.title, id: taskData.id, subTasks: [] }
      }
    },
    false,
    function(response) {
      res.send(response);
    }
  );
};
