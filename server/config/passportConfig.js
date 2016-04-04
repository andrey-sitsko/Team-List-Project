var localStrategy = require('./passportStrategies/localStrategy.js'),
    facebookStrategy = require('./passportStrategies/facebookStrategy.js'),
    User = require('../models/userModel'),
    passport = require('passport');

module.exports = function() {

  passport.use(localStrategy);
  passport.use(facebookStrategy);

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
};
