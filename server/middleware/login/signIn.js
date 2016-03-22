var User = require('../../models/userModel.js'),
    passport = require('passport');

module.exports = {
  local: local,
  facebook: facebook
};

function local(req, res, next) {
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
}

function facebook(req, res, next) {
  passport.authenticate('facebook', { scope : 'email' });
}
