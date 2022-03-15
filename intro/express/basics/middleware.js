var express = require('express');
var app = express();


//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Before request is processed");
   next();
});


//Route handler
app.get('/', function(req, res, next){
   res.send("Route handler response");
   next();
});

// Second middleware 
app.use('/', function(req, res){
    console.log('After response is set');
 });
 



app.listen(3000);