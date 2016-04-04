var FacebookStrategy = require('passport-facebook').Strategy,
    User = require('../../models/userModel.js');

module.exports = new FacebookStrategy({
  clientID: '867433800070115',
  clientSecret: '6e1c00990eba1eef1e64d0b6b8af0b95',
  callbackURL: 'http://localhost:8000/signIn/facebook/callback'
},
function(accessToken, refreshToken, profile, cb) {
  process.nextTick(function () {
    return cb(null, profile);
  });
});
