const passport = require('passport');
      GoogleStrategy = require('passport-google-oauth20').Strategy;
      keys = require('../config/keys');

// PASSPORT CONFIG
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log('accessToken: ', accessToken );
  console.log('refreshToken: ', refreshToken );
  console.log('profile: ', profile);
}));
