
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();

// defining an array to work as the database 
const products = [
  {category: 'Electronics', name: 'Mobile'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
// app.use(bodyParser.json());
//express 4.16 onwards bodyParser is not needed and we can use express.json()
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/products', (req, res) => {
  res.send(products);
});

app.post('/product', (req, res) => {
  var product = req.body;
  products.push(product);
  console.log('postData', product.category);
  res.send(products);
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
