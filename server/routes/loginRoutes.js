var User = require('../models/userModel.js');

function loginRoutes(app) {

  app.get('/', function(req, res) {
    res.render('loginView.html');
  });

  app.post('/signUp', function(req, res) {
    var user = new User({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    });

    user.save(function(err) {
      if (err) throw err;
    });

  });

  return app;
}

module.exports = loginRoutes;
