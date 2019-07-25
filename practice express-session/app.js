const express = require("express");
const logger = require('morgan');
const path = require('path');
const flash = require('flash');
const session = require('express-session');

const indexRouter = require('./routes/index');

const app = express();

app.use('/',indexRouter);

app.use((req,res,next)=>{
    const err = new Error('NOT FOUND');
    err.status =404;
    next(err);
});

app.use((err,req,res)=>{
    res.status(err.status||500);
    res.render ('error');
});

app.listen(3000,()=>{
    console.log('3000번 포트에서 서버 대기중입니다.');
});

module.exports = app;