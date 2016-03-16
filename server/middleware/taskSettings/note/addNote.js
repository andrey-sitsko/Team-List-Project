User = require('../../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      note = req.body.note,
      taskId = req.body.taskId;

  User.update(
    {
      'email': email,
      'tasks.id': taskId
    },
    {
      $set: {
        'tasks.$.note': note
      }
    },
    false,
    function(response) {
      res.send(response);
    }
  );
};
