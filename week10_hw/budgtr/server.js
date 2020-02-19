// Setup
const express = require("express");
const app = express();
const port = 3000;

const budget = require("./models/budget.js");

// Middleware
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(express.urlencoded({ extended: false }));

// Index Page
app.get("/budget", (req, res) => {
  res.render("index.ejs", {
    budget: budget,
  });
});

// Show Page
app.get("/budget/:id", (req, res) => {
  res.render("show.ejs", {
    budget: budget[req.params.id],
  });
});

app.listen(port, () => {
  console.log("listening at port 3000");
});
