const express = require("express");
const router = express.Router();
const Items = require("../models/items.js");
module.exports = router;

// Routes

// Index route
router.get("/", (req, res) => {
  Items.find({}, (err, items) => {
    res.render("index.ejs", { items });
  });
});

//  Seed route
router.get("/seed", (req, res) => {
  Items.create([
    {
      name: "Hydro Flask",
      description: "Best reuseable water bottle",
      img:
        "https://images.boardriders.com/global/rvca-products/all/default/hi-res/uxamcrhf_rvca,fg_wht_bck1.jpg",
      price: 40,
      qty: 50,
    },
    {
      name: "Laptop",
      description: "Gaming computer on the go",
      img:
        "https://c1.neweggimages.com/NeweggImage/ProductImage/34-235-011-V21.jpg",
      price: 700,
      qty: 10,
    },
    {
      name: "Backpack",
      description: "Carry anything you want in this sturdy backpack",
      img:
        "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/azmy5hcezyqcotqwnrqt/hayward-2-backpack-f2CmBL.jpg",
      price: 30,
      qty: 100,
    },
  ]);
  res.redirect("/items");
});

// Show route
router.get("/:id", (req, res) => {
  Items.findById(req.params.id, (err, foundItems) => {
    res.render("show.ejs", {
      items: foundItems,
    });
  });
});

// edit route
router.get("/:id/edit", (req, res) => {
  Items.findById(req.params.id, (err, foundItems) => {
    res.render("edit.ejs", {
      items: foundItems,
    });
  });
});
