var localStrategy = require('./passportStrategies/localStrategy'),
    User = require('../models/userModel');

module.exports = function(passport) {

  passport.use(localStrategy);

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  return passport;
};
