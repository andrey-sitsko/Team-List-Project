var googleStrategy = require('passport-google-plus');

module.exports = new googleStrategy({
    clientId: '706642257689-oirpr00cf06hjdl68tavfn4t86t45aq7.apps.googleusercontent.com',
    clientSecret: 't1b7hi7fBroPHAmqdF6nBybd',
    callbackURL: 'http://localhost:8000/signIn/google/callback'
  },
  function(tokens, profile, done) {
    done(null, profile, tokens);
  }
);
