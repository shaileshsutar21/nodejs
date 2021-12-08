const s = require('./3-streams');
const streams = require('./4-streams');

async function testFileSteams() {
// 1
// s.writeToFileSync();
// console.log('write file done');
//console.log('read file done.\n File content: ' + s.readFileSync())

//2 
streams.readFileStream();
streams.copyUsingFileStream();
}

testFileSteams();