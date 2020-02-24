// Setup
const express = require("express");

const app = express();

const port = 3000;

const pokemon = require("./models/pokemon.js");

// MiddleWare

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(express.urlencoded({ extended: false }));

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

app.listen(port, () => {
  console.log("listening");
});
