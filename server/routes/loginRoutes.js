var User = require('../models/userModel.js'),
    passport = require('passport');

module.exports = function(app) {

  app.get('/logout', function(req, res) {
    req.session.destroy();
    req.logout();
    res.redirect('/');
  });

  app.post('/signUp', function(req, res) {
    var newUser = new User({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    });
    User.find({email: newUser.email}, function(err, user) {
      if(err) {
        throw err;
      }
      if(user.length) {
        res.send({success: false, status: 'already exist'});
      } else {
        newUser.save(function(err) {
          if (err) {
            throw err;
          }
        });
        passport.authenticate('local', function(err, user) {
          if (err) {
            return next(err);
          }
          if (!user) {
            res.send({success: false, status: 'auth error'});
          } else {
            req.login(user, function(err) {
              if (err) {
                throw err;
              }
            });
            res.send({success: true, user: user});
          }
        })(req, res);
      }
    });
  });

  app.post('/signIn', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        res.send({success: false});
      } else {
        req.login(user, function(err) {
          if (err) {
            throw err;
          }
        });
        res.send({success: true, user: user});
      }
    })(req, res);
  });

  app.get('/', function (req, res) {
    if (req.user) {
        res.redirect('/main');
    } else {
        res.render('./loginView.html');
    }
  });

  app.get('/main', function (req, res) {
      if (req.user) {
          res.render('./mainView.html');
      } else {
          res.redirect('/');
      }
  });

  app.get('/signIn/facebook', passport.authenticate('facebook'), function() {});

  app.get('/signIn/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    res.send({
      success: 'true',
      user: req.user
    });
  });

  app.get('/signIn/google', passport.authenticate('google'), function() {});

  app.get('/signIn/google/callback', passport.authenticate('google'), function(req, res) {
    var user = req.user;
    req.login(user, function(err) {
      if (err) {
        throw err;
      }
    });
    res.send('SOCIAL_AUTH_JSON_CALLBACK' + '(' + JSON.stringify({
      success: 'true',
      user: user
    }) + ')');
  });

  app.get('/currentUser', function(req, res) {
    User.findOne({ email: req.user.email }, function(err, user) {
      res.send(user);
    });
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
};
