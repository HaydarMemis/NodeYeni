//


var fs = require('fs');
var express = require('express');

var app = express();

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