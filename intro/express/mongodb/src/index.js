const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const employeeService = require("./routes/employeeService");
const {addEmployee} = require("./database/employee");

// defining the Express app
const app = express();

app.use(express.json());

const {startDatabase} = require('./database/mongo');
const {insertProduct, getProducts} = require('./database/product');

app.use("/api", employeeService);
// app.get('/', async (req, res) => {
//   res.send(await getProducts());
// });

app.post('/product', async (req, res) => {
    await insertProduct(req);
    res.send(await getProducts());
  });

// start the in-memory MongoDB instance
startDatabase().then(async () => {
 // await insertProduct({title: 'Hello, now from the in-memory database!'});
  await addEmployee({name: 'Scott Tiger'});

  // start the server
  app.listen(3001, async () => {
    console.log('listening on port 3001');
  });
});