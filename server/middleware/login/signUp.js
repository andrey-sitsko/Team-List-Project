var User = require('../../models/userModel.js'),
    passport = require('passport');

module.exports = function(req, res) {
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
};
