var express = require('express');
var app = express();
var movieRoute = express.Router();
var Movie = require('../models/movie');


// add movie
movieRoute.route('/add').post(function (req, res) {
    let movie = new Movie(req.body);
     movie.save()
      .then(movie => {
      res.status(200).json({'movie': 'movie is added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to update the database");
      });
  });

// get movie
movieRoute.route('/').get(function (req, res) {
  Movie.find(function (err, movies){
     if(err){
       console.log(err);
     }
     else {
       res.json(movies);
     }
   });
 });

 // get movie by id
 movieRoute.route('/:id').get((req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
     if (err)
       console.log(err);
     else
       res.json(movie);
  });
});

  // update movie
  movieRoute.route('/update/:id').post(function (req, res) {
    Movie.findById(req.params.id, function(err, movie) {
     if (!movie)
       return next(new Error('Could not load the movie'));
     else {
        movie.title = req.body.title;
        movie.runningTime = req.body.runningTime;
        movie.genre = req.body.genre;
        movie.rating = req.body.rating;
        movie.director = req.body.director;
        movie.status = req.body.status;
 
       movie.save().then(movie => {
           res.json('Update completed');
       })
       .catch(err => {
             res.status(400).send("Something went wrong updating the movie");
       });
     }
   });
 });

 
// find customer to reserve
movieRoute.route('/reserve/:id').get(function (req, res) {
  var id = req.params.id;
  Player.findById(id, function (err, movie){
      res.json(movie);
  });
});

 // Defined delete | remove | destroy route
 movieRoute.route('/delete/:id').get(function (req, res) {
    Movie.findByIdAndRemove({_id: req.params.id}, function(err, player){
         if(err) res.json(err);
         else res.json('Successfully removed');
     });
 });

 module.exports = movieRoute;