// http module
const http = require('http');
const hb = require('./2.1-delay');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(async (req, res) => {
 // console.log(req.method);
 // console.log(req.url);
 
  res.statusCode = 200;
  // if(req.url === '/favicon.ico') {
  //  res.end();
  //  return;
  // }
  console.log('blocking test starts');
  hb.blockingtest();
  console.log('blocking test complete'); 
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello ABC');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

