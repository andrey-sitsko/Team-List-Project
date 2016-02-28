User = require('../../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      subTaskData = req.body;

  User.update(
    {
      'email': email
    },
    {
      $pull: {
       'subTasks' : { id: subTaskData.id }
      }
    },
    false,
    function(response) {
      res.send(response);
    }
  );
};
