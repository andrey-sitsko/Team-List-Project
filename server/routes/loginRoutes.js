var User = require('../models/userModel.js'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    signIn = require('../middleware/login/signIn'),
    signUp = require('../middleware/login/signUp'),
    signOut = require('../middleware/login/signOut'),
    isAuthenticated = require('../middleware/login/isAuthenticated');

function loginRoutes(app) {

  app.get('/logout', signOut);

  app.post('/signUp', signUp);

  app.post('/signIn', signIn);

  app.get('/', function(req, res) {
    res.render('loginView.html');
  });

  app.get('/main', isAuthenticated, function(req, res) {
    res.render('mainView.html');
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
