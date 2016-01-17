var createList = require('../middleware/lists/createList');

function listsRoutes(app) {

  app.post('/createList', createList);

  return app;
}

module.exports = listsRoutes;
