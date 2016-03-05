User = require('../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      listData = req.body;

  User.update(
    {
      'email': email
    },
    {
      $pull: {
        'lists' : { id: listData.id },
        'tasks' : { listId: listData.id },
        'subTasks' : { listId: listData.id }
      }
    },
    false,
    function(response) {
      res.send(response);
    }
  );
};
