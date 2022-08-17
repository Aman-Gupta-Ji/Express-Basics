const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use("/shops", shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(3000);
