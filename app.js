//


var fs = require('fs');
var express = require('express');
const path = require('path');
var app = express();
app.use('/public', express.static(path.join(__dirname,'public'))); //public klasorune erismek icin

app.get('/', function(req,res){
  fs.readFile('index.html', function (err, data) {

    res.write(data);

    res.end('mesaj bitti');


  });
});

app.get('/login', function(req,res){
  fs.readFile('login.html', function (err, data) {

    res.write(data);

    res.end('mesaj bitti');


  });
});

app.listen(8000);