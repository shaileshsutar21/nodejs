const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();

const {startDatabase} = require('./database/mongo');
const {insertProduct, getProducts} = require('./database/product');

app.get('/', async (req, res) => {
  res.send(await getProducts());
});

app.post('/product', async (req, res) => {
    await insertProduct(req);
    res.send(await getProducts());
  });

// start the in-memory MongoDB instance
startDatabase().then(async () => {
  await insertProduct({title: 'Hello, now from the in-memory database!'});

  // start the server
  app.listen(3001, async () => {
    console.log('listening on port 3001');
  });
});