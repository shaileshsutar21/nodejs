const fileHandler = require('./3-files');
const streams = require('./4-streams');

async function testFileSteams() {
// 1
// var data = fileHandler.readFileSync();
// console.log(data);
//fileHandler.writeToFileSync();
fileHandler.writeToFile();
 console.log('write file done');
console.log('read file done.\n File content: ' + fileHandler.readFileSync())

//2 
//streams.readFileStream();
//streams.copyUsingFileStream();
}

testFileSteams();