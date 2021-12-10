var express = require('express');
var router = express.Router();
const {addEmployee,  getEmployees, deleteEmployee} = require("../database/employee");

/* GET employees listing. */
router.get('/employees', async function(req, res, next) {
  res.send(await getEmployees());
});

router.post('/employee', async function(req, res, next) {
  console.log(req.body);
  await addEmployee(req.body);
  res.send(await getEmployees());
});

router.put('/employee', async function(req, res, next) {
  // console.log(req.body);
  // await addEmployee(req.body);
  // res.send(await getEmployees());
});

router.delete('/employee', async function(req, res, next) {
  console.log(req.body.id);
  await deleteEmployee(req.body.id);
  res.send(await getEmployees());
});

module.exports = router;
