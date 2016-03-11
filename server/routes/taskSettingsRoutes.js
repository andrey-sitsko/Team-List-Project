var createSubTask = require('../middleware/taskSettings/subTasks/createSubTask.js'),
    deleteSubTask = require('../middleware/taskSettings/subTasks/deleteSubTask.js'),
    addDeadline = require('../middleware/taskSettings/deadline/addDeadline.js');

function taskSettingsRoutes(app) {

  app.post('/createSubTask', createSubTask);
  app.post('/deleteSubTask', deleteSubTask);
  app.post('/addDeadline', addDeadline);

  return app;
}

module.exports = taskSettingsRoutes;
