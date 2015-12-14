'use strict';

var express = require('express');
var app = express();

var generateMetaphor = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(generateMetaphor);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
