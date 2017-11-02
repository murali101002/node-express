
/*jshint esversion: 6 */

var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', (req, res)=>{
  res.send('Hello World');
});
app.get('/books',(req, res)=>{
  res.send('Welcome to Books');
});

app.listen(PORT,'localhost',()=>{
  console.log(`server is running `);
});