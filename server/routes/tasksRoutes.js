var createTask = require('../middleware/tasks/createTask'),
    deleteTask = require('../middleware/tasks/deleteTask');

function listsRoutes(app) {

  app.post('/createTask', createTask);
  app.post('/deleteTask', deleteTask);

  return app;
}

module.exports = listsRoutes;
