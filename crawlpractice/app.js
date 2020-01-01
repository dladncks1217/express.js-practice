const express = require('express');
const path = require('path');
require('dotenv').config();

const index = require('./routes/index');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.set('port', process.env.PORT||8800);

app.use('/',index);

/*
const client = require('cheerio-httpcli');
client.fetch("http://www.skhu.ac.kr/board/boardlist.aspx?bsid=10004&searchBun=51", {}, function (err, $, res, body) {
  const list = $(".left15 #ctl00_ContentPlaceHolder1_ctl00_rptList_ctl00_lblTitle");
  list.each(function(){
    let result = $(this).find('a').text();
    console.log(result);
  });
});
*/
app.use((error,res,next)=>{
  const err = new Error('NOT FOUND');
  err.statusCode = 404;
  next(err);
});

app.use((err,res,next)=>{
  res.locals.message = err.message;
    res.locals.message = req.app.get('env') === 'development' ? err :{};
    res.status(err.status||500);
    res.render('error');
});

app.listen(app.get('port'),()=>{
  console.log(`${app.get('port')}번 포트에서 서버 대기중`);
});