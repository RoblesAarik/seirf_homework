const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, default: 0 },
  qty: { type: Number, default: 0 },
});

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
