const express = require("express");
const app = express();
const port = 3000;

app.get("/greeting/:name", (req, res) => {
  res.send(`Wow! Hello there, ${req.params.name}`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  let percentage = req.params.tipPercentage / 100;
  let amount = req.params.total * percentage;
  res.send("TIP amount is $" + amount);
});

app.get("/magic/:question", (req, res) => {
  let response = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  let answer = response[Math.floor(Math.random() * response.length)];
  res.send(`<html>
  <body>
  <h1>${answer}<h1>
  <body> 
  <html>`);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
