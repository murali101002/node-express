

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
  req.on('error', err =>{
    console.log('req error', error);
    res.statusCode = 400;
    res.end();
  });
  res.on('error', error=>{
    console.log('res error', error);
  });
  if(req.method === 'GET' && req.url === '/echo'){
    res.statusCode = 200;
    req.pipe(res);
  }else{
    res.statusCode = 404;
    res.end();
  }
}).listen(port);