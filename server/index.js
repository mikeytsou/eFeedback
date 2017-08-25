const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const app = express();

// MODELS
require('./models/user');
require('./services/passport');

// APP CONFIG MIDDLEWARE
mongoose.connect(keys.mongoURI);
app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // length of cookies life within browser before it expires(30days, 24hours, 60minutes, 60seconds, 1000milliseconds)
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
authRoutes(app);
billingRoutes(app);

// DEFAULT ROUTE
app.get('*', (req, res) => {
  res.send('PAGE NOT FOUND');
});

// SERVER
app.listen(process.env.PORT || 5000, () => {
  console.log('CONNECTED TO PORT 5000');
});
