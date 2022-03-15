var express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.send('GET route on route.');
});
router.post('/', (req, res) =>{
   res.send('POST route on route.');
});

//export this router 
module.exports = router;