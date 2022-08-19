const express = require("express");
const path = require("path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  // with .post only works for post requests
  console.log(req.body);
  res.redirect("/shops/");
});

module.exports = router;
