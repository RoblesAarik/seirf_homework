const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<html> <body> <h1> 99 Bottles of Beer on the Wall<h1>
  <a href="http://localhost:3000/98">Take on down pass it around</a>
   <body>
  <html>`);
});

app.get("/:numberOfBeers", (req, res) => {
  res.send(`<html> <body> <h1> ${
    req.params.numberOfBeers
  } of Beer on the Wall<h1>
    <a href="http://localhost:3000/${req.params.numberOfBeers -
      1}">Take on down pass it around</a>
     <body>
    <html>`);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
