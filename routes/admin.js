const express = require("express");

const router = express.Router();

app.get("/admin/add-product", (req, res, next) => {
  res.send(
    '<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post("/admin/add-product", (req, res) => {
  // with .post only works for post requests
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
