var express = require('express');
var app = express();
var path = require("path");

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/views'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile('index');
});

app.post('/superhero', function(req, res){
  var superhero_name = req.body.superheroName;
  console.log('Here is your superhero name: ' + superhero_name);
  res.redirect('http://localhost:3000/superhero.html');
  })

app.get('/superhero', function(req, res) {
  res.sendFile(__dirname + 'superhero');
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("App is running on port ", port);
