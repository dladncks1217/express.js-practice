const express = require('express');
const path = require('path');
// 등등 모듈들

const app = express();

const IndexRouter = require('routes/index');

app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));
app.use('/', express.static(path.join(__dirname,'public')));

app.use('/',IndexRouter);

app.use((req,res,next)=>{
    const err = new Error('NOT FOUND');
    err.status = 404;
    next(err);
});

app.use((err,req,res)=>{
    res.status(err.status||500);
    res.render('error');
});

app.listen(3000,()=>{
    console.log('3000번 포트에서 서버 대기중입니다!');
});