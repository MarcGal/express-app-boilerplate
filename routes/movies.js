const express = require('express');
// const expressLayouts = require('express-ejs-layouts');

// const mongoose = require('mongoose');

const movies = require('../models/movie');

const router = express.Router();


// SHOW ALL MOVIES
router.get('/', (req, res, next) => {
  movies.find()
    .then((pelis) => {
      res.render('movies/movies', { pelis });
    })
    .catch((error) => {
      next(error);
    });
});

// ADD NEW MOVIES
router.get('/new', (req, res, next) => {
  console.log('we are in get new');
  res.render('movies/new');
});

router.post('/', (req, res, next) => {
  const { title, genre, plot } = req.body;
  movies.create({
    title,
    genre,
    plot,
  })
    .then((createdObject) => {
      res.redirect('/movies');
    })
    .catch((error) => {
      next(error);
    });
});


// GET MOVIE DETAILS
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  movies.findById(id)
    .then((movie) => {
      console.log(movie);
      res.render('movies/movie', { movie });
    })
    .catch((error) => {
      next(error);
    });
});


//  DELETE A MOVIE
router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  movies.findByIdAndDelete(id)
    .then((movie) => {
      res.redirect('/movies');
    })
    .catch((error) => {
      next(error);
    });
});

// UPDATE MOVIE INFO
router.get('/:id/update', (req, res, next) => {
  const { id } = req.params;
  movies.findById(id)
    .then((movie) => {
      res.render('movies/update', { movie });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/update', (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  movies.findByIdAndUpdate(id, { title, genre, plot })
    .then((movie) => {
      res.render('movies/movie', { movie });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
