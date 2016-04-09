var localStrategy = require('./passportStrategies/localStrategy.js'),
    facebookStrategy = require('./passportStrategies/facebookStrategy.js'),
    googleStrategy = require('./passportStrategies/googleStrategy.js'),
    User = require('../models/userModel'),
    passport = require('passport');

module.exports = function() {

  passport.use(localStrategy);
  passport.use(facebookStrategy);
  passport.use(googleStrategy);

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
};
