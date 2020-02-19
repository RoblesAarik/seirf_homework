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

// New Page
app.get("/budget/new", (req, res) => {
  res.render("new.ejs");
});

// Show Page
app.get("/budget/:id", (req, res) => {
  res.render("show.ejs", {
    budget: budget[req.params.id],
  });
});

// Post route that creates new item
app.post("/budget", (req, res) => {
  console.log(req.body);
  let item = {};
  item.date = req.body.date;
  item.name = req.body.name;
  item.from = req.body.from;
  item.amount = req.body.amount;
  item.tags = req.body.tags;
  budget.push(item);
  console.log("budget", budget);
  res.redirect("/budget");
});

app.listen(port, () => {
  console.log("listening at port 3000");
});
