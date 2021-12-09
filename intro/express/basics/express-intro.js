const express = require("express");
const app = express();

//setup
const port = process.env.PORT || 8080;
app.listen(port);

//routes
app.get("/api/books", async (req, res, next) => {
    console.log("GET method for books was invoked");
    res.status(200).json([{name: 'Javascript Fundamentals'}, 
    {name: 'NodeJS fundamentals'}]);
});