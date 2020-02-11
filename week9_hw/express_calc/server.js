const express = require("express");

const app = express();
app.get("/calc/:num1/:num2", (req, res) => {
  let sum = Number(req.params.num1) + Number(req.params.num2);
  res.send(`the sum is ` + sum);
});

app.get("/someroute", (req, res) => {
  console.log(req.query);
  res.send("someroute accessed");
});

app.get("/calcquery/:num1/:num2", (req, res) => {
  let sum = Number(req.params.num1) + Number(req.params.num2);
  let multiply = Number(req.params.num1) * Number(req.params.num2);
  let divide = Number(req.params.num1) / Number(req.params.num2);
  let subtract = Number(req.params.num1) - Number(req.params.num2);
  if (req.query.operation === "add") {
    res.send("The answer is " + answer);
  } else if (req.query.operation === "multiply") {
    res.send("The answer is " + multiply);
  } else if (req.query.operation === "divide") {
    res.send("The answer is " + divide);
  } else if (req.query.operation === "subtract") {
    res.send("The answer is " + subtract);
  } else {
    res.send("No Operation");
  }
});

var port = 3000;

app.listen(port, () => {
  console.log("app is running on port: ", port);
});
