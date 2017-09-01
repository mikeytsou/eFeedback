const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const app = express();

// MODELS
require('./models/user');
require('./models/survey');
require('./services/passport');

// APP CONFIG MIDDLEWARE
mongoose.connect(keys.mongoURI, { useMongoClient: true });
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
const surveyRoutes = require('./routes/surveyRoutes');
authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build')); // any request that doesn't match exisiting route handlers, express will first look to serve up production assest ie. the main.js or main.css file

  const path = require('path');
  app.get('*', (req, res) => { // express will then attempt to serve up the index.html file(for routes created with react-router) if it doesn't recognize the routes in the existing route handlers
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

// DEFAULT ROUTE
app.get('*', (req, res) => {
  res.send('PAGE NOT FOUND');
});

// SERVER
app.listen(process.env.PORT || 5000, () => {
  console.log('CONNECTED TO PORT 5000');
});
