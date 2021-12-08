const fs = require('fs');

module.exports =  {



  copyUsingFileStream : () =>  {

    var readStream = fs.createReadStream('test.txt', 'utf8');
    readStream.on('open', function () {
      // This just pipes the read stream to the response object (which goes to the client)
      readStream.pipe(fs.createWriteStream('copy.txt')).on('finish',() =>{ console.log('file copied successfully.') });
    });

    readStream.on('error', function(err) {
      console.log('error while processing readstream operation.')
    });
    
  },

  readFileStream : () =>  {

    var readableStream = fs.createReadStream('testFile.txt');
    var data = '';
    var chunk;

    readableStream.on('readable', function() {

      while ((chunk=readableStream.read()) != null) {
        data += chunk;
      }
    });

    readableStream.on('end', function() {
      console.log(data)
    });

  }

  

}