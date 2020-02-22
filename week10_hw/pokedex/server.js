// Setup
const express = require("express");

const app = express();

const port = 3000;

const pokemon = require("./models/pokemon.js");

// Index page
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    pokemon: pokemon,
  });
});

// Show Page
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    pokemon: pokemon[req.params.id],
  });
});

app.listen(port, () => {
  console.log("listening");
});
