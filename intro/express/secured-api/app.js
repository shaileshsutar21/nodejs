const express = require("express");
const app = express();
const util = require("util");
const productService = require("./protectedResource");
const userService = require("./userService");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 8080;
app.listen(port);
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.json());

var router = express.Router();

const authenticate = (req, res, next) => {
    const userClaims = jwt.verify(req.headers.authorization, 'some-secret');
    console.log(`Authorization header ${req.headers.authorization} is and the found user is ${JSON.stringify(userClaims)}`);
    if (!userClaims) {
      res.status(401).end();
    } else {
      req.user = userClaims;
      next();
    }
};

app.use("/api", authenticate);
app.use("/api/products", productService);
app.use("/account", userService.router);
console.log(`App running`);