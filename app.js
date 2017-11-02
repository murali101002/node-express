
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', (req, res)=>{
  res.send('Hello World');
});
app.get('/books',(req, res)=>{
  res.send('Welcome to Books');
});

app.listen(5000,'localhost',()=>{
  console.log(`server is running `);
})