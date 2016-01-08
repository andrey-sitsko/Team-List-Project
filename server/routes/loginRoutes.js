var User = require('../models/userModel.js');

function loginRoutes(app) {

  app.get('/', function(req, res) {
    res.render('loginView.html');
  });

  app.post('/signUp', function(req, res) {
    var nick = new User({
      name: 'Nick Cerminara',
      password: 'password',
      admin: true
    });

    nick.save(function(err) {
      if (err) throw err;
    });

  });

  return app;
}

module.exports = loginRoutes;
