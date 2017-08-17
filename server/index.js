const express = require("express");
      app = express();


app.get("/", (req, res) => {
  res.send({ hello: 'mike' });
});

// MISSING ROUTE
app.get("*", (req, res) => {
  res.send("PAGE NOT FOUND");
});

// SERVER
app.listen(process.env.PORT || 3000, () => {
  console.log("CONNECTED TO PORT 3000");
});
