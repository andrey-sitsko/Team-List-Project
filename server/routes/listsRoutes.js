var createList = require('../middleware/lists/createList'),
    deleteList = require('../middleware/lists/deleteList');

function listsRoutes(app) {

  app.post('/createList', createList);
  app.post('/deleteList', deleteList);

  return app;
}

module.exports = listsRoutes;
