
//required
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//configuration
app.set('view engine', 'ejs'); 

mongoose.connect('mongodb://localhost/test');

app.use(bodyParser.json());

app.use(express.static('public'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s', host, port);
});
 var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log("CONNECTED TO MONGO");
	console.log('');
	console.log('All Systems Go');
});

var Schema  = mongoose.Schema;

var PostSchema = new Schema({
	text: String,
	
});

var Posts = mongoose.model('Post', PostSchema);

app.post('/api/post', function(req, res){
	console.log(req.body);
	var newPost = Post.create(req.body, function(error, newPost){
		console.log(newPost);
	});
	res.json(newPost);
});

app.get('/api/post', function(req,res) {
	Posts.find(function(err, Posts) {
		res.send(Posts);
	});
});

//ROUTES

app.get('/', function (request, response) {
  response.render('index', { title: 'The index page!' });
});


app.get("/api/blogposts")





