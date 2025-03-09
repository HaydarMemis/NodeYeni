//


var fs = require('fs');
var express = require('express');
const path = require('path');
var app = express();
app.use('/public', express.static(path.join(__dirname,'public'))); //public klasorune erismek icin video 4

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', function(req,res){
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(8000);