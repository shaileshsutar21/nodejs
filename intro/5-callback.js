var fs = require('fs');

fs.readFile('./test.txt', function(error, data) {
    console.log(`Event arrived, Error is ${error}, data is ${data}`)
})
