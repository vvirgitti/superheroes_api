'use strict';

var koa = require('koa');
var render = require('co-ejs');
var path = require('path');

var app = module.exports = koa();

render(app, {
  root: path.join(__dirname, 'public'),
  layout: 'index',
  viewExt: 'html'
});

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://DrStrange:MarvelRocks@ds053312.mongolab.com:53312/superheroes')
var Superhero = require('./app/models/superhero');

app.use(function *(){
  yield this.render('index');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("App is running on port ", port);
