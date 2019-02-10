const mongoose = require('mongoose');

// const Celebrity = require('../models/celebrity');


// const celebrities = [
//   {
//     name: 'Jack White',
//     occupation: 'Badass',
//     catchphrase: 'Maybe we should all just listen to records and quit our jobs',
//   },

//   {
//     name: 'Juanito Alimaña',
//     occupation: 'Atracador',
//     catchphrase: 'No sabes quien soy yo',
//   },

//   {
//     name: 'Terminator',
//     occupation: 'Robot',
//     catchphrase: 'Sayonara baby',
//   },
// ];


// mongoose.connect('mongodb://localhost:27017/mongoose-movies', { useNewUrlParser: true });
// Celebrity.create(celebrities)
//   .then(() => {
//     console.log(`Created ${celebrities.length}  celebrities`);
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.log(error);
//   });


const Movie = require('../models/movie');


const movies = [
  {
    title: 'Matrix',
    genre: 'Science fiction',
    plot: 'Dystopian world',
  },

  {
    title: 'Rocky',
    genre: 'Drama',
    plot: 'Boxing champ',
  },
];


mongoose.connect('mongodb://localhost:27017/mongoose-movies', { useNewUrlParser: true });
Movie.create(movies)
  .then(() => {
    console.log(`Created ${movies.length}  movies`);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = movies;
