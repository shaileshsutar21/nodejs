var fs = require('fs');

fs.readFile('./test1.txt', function(error, data) {
    console.log(`Event arrived, Error is ${error}, data is ${data}`)
})
