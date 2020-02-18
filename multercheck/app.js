const express = require('express');
const path = require('path');

const index = require('./routes/index');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',index);

app.use((error,res,next)=>{
    const err = new Error('NOT FOUND');
    err.statusCode = 404;
    next(err);
  });
  
  app.use((err,res,next)=>{
    res.locals.message = err.message;
      res.locals.message = req.app.get('env') === 'development' ? err :{};
      res.status(err.status||500);
  });

app.listen(3000,()=>{
    console.log('3000번 포트에서 서버 대기중');
});