const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  // with .post only works for post requests
  products.push({ title: req.body.title });
  res.redirect("/shops/");
});

exports.routes = router;
exports.products = products;
