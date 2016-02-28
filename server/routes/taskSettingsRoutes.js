var createSubTask = require('../middleware/taskSettings/subTasks/createSubTask.js'),
    deleteSubTask = require('../middleware/taskSettings/subTasks/deleteSubTask.js');

function taskSettingsRoutes(app) {

  app.post('/createSubTask', createSubTask);
  app.post('/deleteSubTask', deleteSubTask);

  return app;
}

module.exports = taskSettingsRoutes;
