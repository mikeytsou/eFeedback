const express = require('express');
      passport = require('passport');
      GoogleStrategy = require('passport-google-oauth20').Strategy;
      keys = require('./config/keys');
      app = express();

// APP CONFIG

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

// ROUTES
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'] // access to a googlers account information
}));

app.get('/auth/google/callback', passport.authenticate('google'));


// MISSING ROUTE
app.get("*", (req, res) => {
  res.send("PAGE NOT FOUND");
});

// SERVER
app.listen(process.env.PORT || 3000, () => {
  console.log("CONNECTED TO PORT 3000");
});
