const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email'] // access to a googlers account information
  }));

  app.get('/auth/google/callback', passport.authenticate('google'));
}
