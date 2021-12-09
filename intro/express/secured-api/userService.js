const express = require("express");
const  router = express.Router();
const util = require("util");
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  console.log(`Login details are ${util.inspect(req.body)}`);
  const user = getUserByName(req.body.username, req.body.password);
  if (!user) {
    res.status(404).end();
  } else {
    const userToken = jwt.sign(user , 'some-secret');

    res.setHeader("authorization", userToken);
    console.log(`Authorization header is ${userToken}`);
    res.status(200).end();
  }
});

function getUserByName(username, password) {
  if (username === "user1" && password === "123456") {
    return { name: "user1", roles: ["user"] };
  }
  if (username !== "test" || password !== "123456") {
    return null;
  }
  
  return { name: "test", roles: ["admin", "user"] };
}

function getUserById(id) {
  return {id:1, name: "test", roles: ["admin", "user"] };
}

module.exports.router = router;
module.exports.getUserByName = getUserByName;
module.exports.getUserById = getUserById;