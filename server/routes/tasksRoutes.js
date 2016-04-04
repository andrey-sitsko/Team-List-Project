var User = require('../models/userModel.js');

module.exports = function(app) {

  app.post('/createTask', function(req, res) {
    var email = req.user.email,
        taskData = req.body;

    User.update(
      {
        'email': email,
      },
      {
        $push: {
         'tasks' : { title: taskData.title, id: taskData.id, listId: taskData.listId, deadline: null, note: null }
        }
      },
      false,
      function(response) {
        res.send(response);
      }
    );
  });

  app.post('/deleteTask', function(req, res) {
    var email = req.user.email,
        taskData = req.body;

    User.update(
      {
        'email': email
      },
      {
        $pull: {
         'tasks' : { id: taskData.id },
         'subTasks' : { taskId: taskData.id }
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
