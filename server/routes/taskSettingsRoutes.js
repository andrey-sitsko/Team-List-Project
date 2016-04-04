var User = require('../models/userModel.js');

module.exports = function(app) {

  app.post('/createSubTask', function(req, res) {
    var email = req.user.email,
        subTaskData = req.body;

    User.update(
      {
        'email': email
      },
      {
        $push: {
         'subTasks' : { title: subTaskData.title, id: subTaskData.id, taskId: subTaskData.taskId, listId: subTaskData.listId }
        }
      },
      false,
      function(response) {
        res.send(response);
      }
    );
  });

  app.post('/deleteSubTask', function(req, res) {
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
  });

  app.post('/addDeadline', function(req, res) {
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
  });

  app.post('/addNote', function(req, res) {
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
  });

  return app;
}
