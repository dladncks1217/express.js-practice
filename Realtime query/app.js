const express = require('express');
const path = require('path');
const morgan = require('morgan');

const indexRouter = require('./routes/index');

const app = express();
require('dotenv').config();


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',indexRouter);

app.listen(process.env.PORT,()=>{
    console.log(`${process.env.PORT}번 포트에서 서버 대기중입니다.!`);
});