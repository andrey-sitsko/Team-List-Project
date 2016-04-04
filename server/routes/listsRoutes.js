var User = require('../models/userModel.js');

module.exports = function(app) {

  app.post('/createList', function(req, res) {
    var email = req.user.email,
        listData = req.body;

    User.update(
      {
        'email': email
      },
      {
        $push: {
          "lists" : {
            title: listData.title,
            id: listData.id,
            tasks: []
          }
        }
      },
      false,
      function(response) {
        res.send(response);
      }
    );
  });

  app.post('/deleteList', function(req, res) {
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
  });

  return app;
};
