const express = require("express");
const router = express.Router();
const middlewares = require("./auth");

router.get("/", middlewares.roleBasedAuthorization("admin"), (req, res, next) => {
  res.json({ "type": "electronics" });
});

module.exports = router;
