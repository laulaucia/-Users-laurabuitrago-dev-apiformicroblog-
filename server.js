
//required
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//configuration
app.set('view engine', 'ejs'); 

app.get('/', function (request, response) {
  response.render('index', { title: 'The index page!' });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s', host, port);
});

app.use(express.static('public'));