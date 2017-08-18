const express = require('express');
const mongoose = require('mongoose');
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

// MISSING ROUTE
app.get('*', (req, res) => {
  res.send('PAGE NOT FOUND');
});

// SERVER
app.listen(process.env.PORT || 3000, () => {
  console.log('CONNECTED TO PORT 3000');
});
