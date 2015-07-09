var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://DrStrange:MarvelRocks@ds053312.mongolab.com:53312/superheroes')
var Superhero = require('./app/models/superhero');

// app.use(express.static(__dirname, '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/superhero', function(req, res) {
  var superhero_name = req.body.superheroName;
  console.log("Here is your superhero name: " + superhero_name);
  res.end("yes");
  // res.sendFile(__dirname + '/public/index.html')
});

// app.get('/superhero', function(req, res) {
//   res.sendFile(__dirname + '/public/index.html');
// });

var port = process.env.PORT || 3000;

app.listen(port);
console.log("App is running on port ", port);
