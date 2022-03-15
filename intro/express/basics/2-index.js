var express = require('express');
var app = express();

var customroute = require('./2-route.js');

app.use('/abc', customroute);

app.listen(3000);