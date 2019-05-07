var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/',(res,req,next)=>{
  console.log('미니게임라우터임');
  next();
});
router.get('/', function(req, res, next) {
  console.log('미니게임라우터 들어옴');
  res.render('/pages/sleep_minigame.html');
});

module.exports = router;
