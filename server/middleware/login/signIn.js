var User = require('../../models/userModel.js'),
    passport = require('passport');

module.exports = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.send({success: false});
    } else {
      req.login(user, function(err) {
        if (err) {
          return next(err);
        }
      });
      res.send({success: true, user: user});
    }
  })(req, res, next);
};
