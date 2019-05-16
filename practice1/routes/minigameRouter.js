const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/',(res,req,next)=>{
  console.log('미니게임라우터임');
  next();
});
router.get('/',(req, res, next)=> {
  console.log('미니게임라우터 들어옴');
  res.sendFile('/Users/dlaxo/express/practice1/public/pages/sleep_minigame.html');
  
});
router.get('/kiwi',(res,req,next)=>{
  console.log('라우터_키위 들어옴');
  res.sendFile('/Users/dlaxo/express/practice1/public/pages/quiz_kiwi.html');
});
router.get('/cherry',(res,req,next)=>{
  console.log('라우터_체리 들어옴');
  res.sendFile('/Users/dlaxo/express/practice1/public/pages/quiz_cherry.html');
  
});
router.get('/banana',(res,req,next)=>{
  console.log('라우터_바나나 들어옴');
  res.sendFile('/Users/dlaxo/express/practice1/public/pages/quiz_banana.html');
 
});
router.get('/lettuce',(res,req,next)=>{
  console.log('라우터_상추 들어옴');
  res.sendFile('/Users/dlaxo/express/practice1/public/pages/quiz_lettuce.html');
  
});
router.get('/tomato',(res,req,next)=>{
  console.log('라우터_토마토 들어옴');
  res.sendFile('/Users/dlaxo/express/practice1/public/pages/quiz_tomato.html');
  
});
router.get('/brocoly',(res,req,next)=>{
  console.log('라우터_브로콜리 들어옴');
  res.sendFile('/Users/dlaxo/express/practice1/public/pages/quiz_brocoly.html');
 
});
router.get('/meat',(res,req,next)=>{
  console.log('라우터_고기 들어옴');
  res.sendFile('/Users/dlaxo/express/practice1/public/pages/quiz_meat.html');

});

module.exports = router;