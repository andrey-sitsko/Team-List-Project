var User = require('../models/userModel.js'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    localSignIn = require('../middleware/login/signIn').local,
    facebookSignIn = require('../middleware/login/signIn').facebook,
    signUp = require('../middleware/login/signUp'),
    signOut = require('../middleware/login/signOut'),
    authCheck = require('../middleware/login/authCheck.js');

function loginRoutes(app) {

  app.get('/logout', signOut);
  app.post('/signUp', signUp);
  app.post('/signIn', localSignIn);

  app.get('/signIn/facebook', facebookSignIn);

  app.get('/', authCheck.login);
  app.get('/main', authCheck.main);
  app.get('/currentUser', function(req, res) {
    res.send(req.user);
  });
  app.get('/api/users', function(req, res) {
    User.find({}, function(err, users) {
      res.send(users);
    });
  });
  app.get('/api/deleteAll', function(req, res) {
    User.remove({}, function(err) {});
  });

  return app;
}

module.exports = loginRoutes;
