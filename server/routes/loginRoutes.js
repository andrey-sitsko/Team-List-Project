var User = require('../models/userModel.js'),
    jwt = require('jsonwebtoken');

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

  app.post('/signIn', function(req, res) {
    User.findOne({
      email: req.body.email
    },
    function(err, user) {
      if (err) {
        throw err;
      }
      if (!user || req.body.password != user.password) {
        res.json({ success: false, error: 'notFound' });
      } else {
        var token = jwt.sign(user, 'shhhhh', {
          expiresIn: '1d'
        });
        res.json({
          success: true,
          token: token
        });
      }
    });
  });

  app.get('/users', function(req, res) {
    User.find({}, function(err, users) {
      res.send(users);
    });
  });

  app.get('/deleteAll', function(req, res) {
    User.remove({}, function(err) {});
  });

  return app;
}

module.exports = loginRoutes;
