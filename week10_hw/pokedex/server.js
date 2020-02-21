// Setup
const express = require("express");
const app = express;
const port = 3000;

// Index page
app.get("/pokemon", (req, res) => {
  res.send("Works");
});

app.listen(port, () => {
  console.log("listening");
});
