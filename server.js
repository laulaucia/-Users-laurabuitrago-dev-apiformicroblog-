
var express = require('express');
var app = express();

app.set('view engine', 'ejs');  

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

app.use(express.static('public'));