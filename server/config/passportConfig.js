var localStrategy = require('./passportStrategies/localStrategy.js'),
    facebookStrategy = require('./passportStrategies/facebookStrategy.js'),
    User = require('../models/userModel'),
    passport = require('passport');

module.exports = function() {

  passport.use(localStrategy);
  passport.use(facebookStrategy);

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
