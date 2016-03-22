var LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({
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
});
