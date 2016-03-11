User = require('../../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      date = req.body.date,
      taskId = req.body.taskId;

  User.update(
    {
      'email': email,
      'tasks.id': taskId
    },
    {
      $set: {
        'tasks.$.deadline': date
      }
    },
    false,
    function(response) {
      res.send(response);
    }
  );
};
