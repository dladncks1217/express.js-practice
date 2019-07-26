const express = require('express');
const parseurl = require('parseurl');
const session = require('express-session');
const sessionstore = require('session-file-store')(session);

const authRouter = require('./routes/auth');

const app = express();



app.use(session({
  secret: 'asdf',
  resave: false,    //세션 데이터가 바뀌기 전까지는 세션 저장소의 값을 저장하지 않는다. 만약 true면 값이 바뀌건 바뀌지 않건 계속 저장소에 저장을 한다. 그냥 false로하자.
  saveUninitialized: true, //세션이 필요하기 전까지 세션을 구동시키지 않는다. 서버에 부담가니까 그냥 true쓰자. 
  store: new sessionstore(),
}));
 

 
app.get('/', function (req, res, next) {
    console.log(req.session);
    if(req.session.num === undefined){
        req.session.num = 1;
    } else{
        req.session.num+=1;
    }
    res.send(`Views:${req.session.num}`);
  res.send('hello session');
});
 


app.listen(3000,()=>{
    console.log('3000번포트');
});