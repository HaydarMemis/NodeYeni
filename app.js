//


var fs = require('fs');
var express = require('express');
const path = require('path');
var app = express();
app.use('/public', express.static(path.join(__dirname, 'public'))); //public klasorune erismek icin video 4

var indexController = function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
}
var loginController = function (req, res) {
  res.sendFile(path.join(__dirname, 'login.html'));
}

app.get('/', indexController);

app.get('/login', loginController);

app.listen(8000);