User = require('../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      taskData = req.body;
  User.update(
    {
      'email': email,
      'lists.id': taskData.listId,
    },
    {
      $pull: {
       'lists.$.tasks' : { id: taskData.id }
      }
    },
    false,
    function(response) {
      res.send(response);
    }
  );
};
