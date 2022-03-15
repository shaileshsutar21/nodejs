const express = require('express')
const helmet = require('helmet');
const morgan = require('morgan');

const app = express()

const port = 3000

app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));
//app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.post('/api', (req, res) => {
  console.log(req.body);
  res.send(req.body.name);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})