'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://DrStrange:MarvelRocks@ds053312.mongolab.com:53312/superheroes')
var Superhero = require('../app/models/superhero');
var router = module.exports = require('express').Router();

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
