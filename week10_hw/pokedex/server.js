// Setup
const express = require("express");

const app = express();

const port = 3000;

const pokemon = require("./models/pokemon.js");

const methodOverride = require("method-override");

// MiddleWare

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(express.urlencoded({ extended: false }));

// Middleware to use method_override
app.use(methodOverride("_method"));

// Index page
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    pokemon: pokemon,
  });
});

// New Route
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs");
});

// Edit Route
app.get("/pokemon/:id/edit", (req, res) => {
  res.render("edit.ejs", {
    pokemon: pokemon[req.params.id],
    id: req.params.id,
  });
});

// Show Route
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    pokemon: pokemon[req.params.id],
  });
});

// Post route
app.post("/pokemon", (req, res) => {
  let newPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(","),
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed,
    },
  };
  console.log(pokemon);
  pokemon.push(newPokemon);

  res.redirect("/pokemon");
});

// Updated route
app.put("/pokemon/:id", (req, res) => {
  let edit = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(","),
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed,
    },
  };
  pokemon[req.params.id] = edit;
  res.redirect("/pokemon");
});

// delete route
app.delete("/pokemon/:id", (req, res) => {
  pokemon.splice(req.params.id, 1);
  res.redirect("/pokemon");
});

// app listener
app.listen(port, () => {
  console.log("listening");
});
