const express = require("express");
      passport = require("passport");
      GoogleStrategy = require("passport-google-oauth20").Strategy;
      app = express();

// APP CONFIG

// PASSPORT CONFIG
passport.use(new GoogleStrategy({

}));


// MISSING ROUTE
app.get("*", (req, res) => {
  res.send("PAGE NOT FOUND");
});

// SERVER
app.listen(process.env.PORT || 3000, () => {
  console.log("CONNECTED TO PORT 3000");
});
