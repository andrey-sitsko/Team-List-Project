var User = require('../models/userModel.js');

function loginRoutes(app) {

  app.get('/', function(req, res) {
    res.render('loginView.html');
  });

  app.post('/api/signUp', function(req, res) {
  
  });

  return app;
}

module.exports = loginRoutes;
