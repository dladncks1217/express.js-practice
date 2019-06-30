const createError = require('http-errors');
const express = require('express');
const  path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const {sequelize} = require('./models');

const app = express();
sequelize.sync();


// 템플릿엔진 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments',commentsRouter);

// 404 에러 핸들러
app.use(function(req, res, next) {
  next(createError(404));
});

// 에러 핸들러
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // 렌더링 에러페이지
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
