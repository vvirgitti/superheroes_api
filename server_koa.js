var koa = require('koa');
var app = koa();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://DrStrange:MarvelRocks@ds053312.mongolab.com:53312/superheroes')
var Superhero = require('./app/models/superhero');


app.use(function *(){
  this.body = "Hello World";
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log("App is running on port ", port);
