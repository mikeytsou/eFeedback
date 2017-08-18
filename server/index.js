const express = require('express');
      mongoose = require('mongoose');
      PassportConfig = require('./middleware/passport');
      keys = require('./config/keys');
      app = express();
// ROUTES
      authenticationRoutes = require('./routes/authentications');

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
