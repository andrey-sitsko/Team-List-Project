User = require('../../models/userModel.js');

module.exports = function(req, res) {
  var email = req.user.email,
      listData = req.body;

  User.update(
    {'email': email},
    { $push: { "lists" : { title: listData.title, id: listData.id, tasks: [] } } },
    false,
    function(response) {
      res.send(response);
    }
  );
};
