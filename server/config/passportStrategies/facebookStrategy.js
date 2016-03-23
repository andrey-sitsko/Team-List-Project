var facebookStrategy = require('passport-facebook').Strategy;

module.exports = new facebookStrategy({
  clientID: '1672398169679349',
  clientSecret: 'd9f7a69107c02787c4cd334c203495a',
  callbackURL: 'http://localhost:8000/signIn/facebook/callback'
},
function(accessToken, refreshToken, profile, cb) {
  
  /*User.findOne({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });*/
});
