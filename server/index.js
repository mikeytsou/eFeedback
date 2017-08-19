const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const app = express();

// MODELS
require('./models/user');
require('./middleware/passport');

// ROUTES
const authenticationRoutes = require('./routes/authentications');

authenticationRoutes(app);


// APP CONFIG
const database = keys.mongoURI || 'mongodb://localhost/e_feeback'
mongoose.connect(database);
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

// MISSING ROUTE
app.get('*', (req, res) => {
  res.send('PAGE NOT FOUND');
});

// SERVER
app.listen(process.env.PORT || 3000, () => {
  console.log('CONNECTED TO PORT 3000');
});
