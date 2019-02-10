const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const ejs = require('ejs');
// const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');
const celebritiesRouter = require('./routes/celebrities');
const moviesRouter = require('./routes/movies');
// const celebrityDetailRouter = require('./routes/celebrities/:id');
// const usersRouter = require('./routes/users');

mongoose.connect('mongodb://localhost:27017/mongoose-movies', { useNewUrlParser: true })
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.set('layout', 'views/layouts/layout');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/index', usersRouter);
app.use('/celebrities', celebritiesRouter);
app.use('/movies', moviesRouter);
// app.use('/celebrities/:id', celebrityDetailRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
