var createSubTask = require('../middleware/taskSettings/createSubTask.js'),
    deleteSubTask = require('../middleware/taskSettings/deleteSubTask.js');

function taskSettingsRoutes(app) {

  app.post('/createSubTask', createSubTask);
  //app.post('/deleteSubTask', deleteSubTask);

  return app;
}

module.exports = taskSettingsRoutes;
