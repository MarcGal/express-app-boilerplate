const express = require('express');
// const expressLayouts = require('express-ejs-layouts');

// const mongoose = require('mongoose');

const celebrities = require('../models/celebrity');

const router = express.Router();


// SHOW ALL CELEBRITIES
router.get('/', (req, res, next) => {
  celebrities.find()
    .then((famosos) => {
      res.render('celebrities', { famosos });
    })
    .catch((error) => {
      next(error);
    });
});

// ADD NEW CELEBRITIES
router.get('/new', (req, res, next) => {
  console.log('we are in get new');
  res.render('new');
});


router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  celebrities.create({
    name,
    occupation,
    catchPhrase,
  })
    .then((createdObject) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

// GET A SPECIFIC CELEBRITY
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  celebrities.findById(id)
    .then((celebrity) => {
      console.log(celebrity);
      res.render('show', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

//  DELETE A CELEBRITY
router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  celebrities.findByIdAndDelete(id)
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

// UPDATE A CELEBRITY


module.exports = router;
