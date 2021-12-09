const fs = require('fs');

module.exports =  {

  readFile : () =>  {

    fs.readFile('test.txt', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return;
      }
      console.log(data)
    })
    
  },

  readFileSync : () =>  {
    console.log('Reading file in sync')
    data = fs.readFileSync('test.txt', 'utf8' );
    return data;
  },

  writeToFile : () => {
    fs.writeFile('test.txt', '\n Additional text', { flag: 'a+' }, err => {});
  },

  writeToFileSync : () => {
    fs.writeFileSync('test.txt', '\n Additional text in sync', { flag: 'a+' }, err => {});
  },

}