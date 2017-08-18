const express = require('express');
      PassportConfig = require('./middleware/passport');
      app = express();
// ROUTES
      authenticationRoutes = require('./routes/authentications');

authenticationRoutes(app);

// MISSING ROUTE
app.get("*", (req, res) => {
  res.send("PAGE NOT FOUND");
});

// SERVER
app.listen(process.env.PORT || 3000, () => {
  console.log("CONNECTED TO PORT 3000");
});
