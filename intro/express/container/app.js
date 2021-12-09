const serverless = require('serverless-http');
const express = require("express");
const app = express();


//routes
app.get("/api/books", async (req, res, next) => {
    console.log("GET method for books was invoked");
    res.status(200).json([{name: 'Javascript Fundamentals'}, 
    {name: 'NodeJS fundamentals'}]);
});

//setup
 const port = process.env.PORT || 8080;
 app.listen(port);

//module.exports.handler = serverless(app);

