const express = require("express");
const app = express();
const port = 3000;

const budget = require("./models/budget.js");

app.use(express.static("public"));

app.get("/budget", (req, res) => {
  res.render("index.ejs", {
    budget: budget,
  });
});

app.listen(port, () => {
  console.log("listening at port 3000");
});
