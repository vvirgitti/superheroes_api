var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://DrStrange:MarvelRocks@ds053312.mongolab.com:53312/superheroes')
var Superhero = require('./app/models/superhero');

// app.use(express.static(__dirname, '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

var port = process.env.PORT || 3000;

var router = express.Router();

router.use(function(req, res, next){
  console.log("Testing middleware");
  next();
});

router.get('/', function(req, res) {
  res.json({message: 'Welcome to our API!'});
});

router.route('/superheroes')
  .post(function(req, res){

    var superhero = new Superhero();
    superhero.name = req.body.name;

    superhero.save(function(err){
      if (err)
        res.send(err);

      res.json({ message: 'Superhero created!' });
    });
  })
  .get(function(req, res){
    Superhero.find(function(err, superheroes){
      if (err)
        res.send(err);

        res.json(superheroes);
    });
  });

  router.route('/superheroes/:superhero_id')
    .get(function(req, res){
      Superhero.findById(req.params.superhero_id, function(err, superhero){
        if (err)
          res.send(err);
        res.json(superhero);
      });
    })
    .put(function(req,res){
      Superhero.findById(req.params.superhero_id, function(err, superhero){
        if (err)
          res.send(err);
        superhero.name = req.body.name;

        superhero.save(function(err){
          if (err)
            res.send(err);
          res.json({ message: 'Superhero updated!' });
        });
      });
    })
    .delete(function(req, res){
      Superhero.remove({
        _id: req.params.superhero_id
      }, function(err, superhero) {
        if(err);
          res.send(err);
        res.json({ message: 'Successfully deleted' });
      });
    });

app.use('/api', router);

app.listen(port);
console.log("App is running on port ", port);
