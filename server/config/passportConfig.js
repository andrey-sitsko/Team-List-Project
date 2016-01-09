var LocalStrategy = require('passport-local').Strategy,
    User = require('../models/userModel');

module.exports = function(passport) {

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(email, password, done) {
    User.findOne({email: email}, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user || user.password != password) {
        return done(null, false, { message: 'Not Found' });
      }
      return done(null, user);
    });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err,user){
      if(err) {
        done(err);
      } else {
        done(null,user);
      }
    });
  });

  return passport;
};
