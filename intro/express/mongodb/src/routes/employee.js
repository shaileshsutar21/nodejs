var express = require('express');
var router = express.Router();

/* GET employees listing. */
router.get('/', function(req, res, next) {
  res.send('Send employee list from mongodb');
});

module.exports = router;
