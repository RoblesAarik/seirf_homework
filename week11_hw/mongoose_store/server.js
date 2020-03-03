const express = require("express");
const app = express();

const methodOverride = require("method-override");

// Load up mongoose npm as mongoose:
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/itemsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Controller Middleware
const itemsController = require("./controllers/items_controller.js");

app.use("/items", itemsController);

app.listen(3000, () => {
  console.log("listening");
});
