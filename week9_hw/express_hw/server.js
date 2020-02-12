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

app.listen(port, () => {
  console.log("listening on port", port);
});
