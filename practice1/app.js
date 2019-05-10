const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs');
const indexRouter = require('./routes/index');
const minigameRouter = require('./routes/minigameRouter');
const session = require('express-session');
const app = express();
const homework1Router = require('./routes/homework1Router');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret-code'));
app.use(express.static(path.join(__dirname, '/public')));


app.use('/', indexRouter);
app.use('/sleep_minigame', minigameRouter);
app.use('/homework1Router',homework1Router);


// catch 404 and forward to error handler
app.use((req, res, next)=> {
  res.send('<p>404 error</p>');
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  
});
 
module.exports = app;
