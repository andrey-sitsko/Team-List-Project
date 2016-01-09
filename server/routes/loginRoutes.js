var User = require('../models/userModel.js'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    signIn = require('../controllers/userAuth/signIn'),
    signUp = require('../controllers/userAuth/signUp');

function loginRoutes(app) {

  app.get('/', function(req, res) {
    res.render('loginView.html');
  });

  app.get('/main', function(req, res) {
    res.render('mainView.html');
  });

  app.post('/signUp', signUp);

  app.post('/signIn', passport.authenticate('local', {
    successRedirect: '/main',
    failureRedirect: '/'
  }));

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
