const express = require('express');
      passport = require('passport');
      GoogleStrategy = require('passport-google-oauth20').Strategy;
      keys = require('./config/keys');
      app = express();

// APP CONFIG

// PASSPORT CONFIG
passport.use(new GoogleStrategy({
  clientID: keys.GoogleClientID,
  clientSecret: keys.GoogleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken) => {
  console.log(accessToken);
}));


// MISSING ROUTE
app.get("*", (req, res) => {
  res.send("PAGE NOT FOUND");
});

// SERVER
app.listen(process.env.PORT || 3000, () => {
  console.log("CONNECTED TO PORT 3000");
});
