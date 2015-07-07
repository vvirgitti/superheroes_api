var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var superheroSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Superhero', superheroSchema)
