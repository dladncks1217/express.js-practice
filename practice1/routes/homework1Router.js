var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',(res,req,next)=>{
  console.log('과제1라우터임');
  next();
});
router.get('/', function(req, res, next) {
  console.log('과제1라우터 들어옴.');
  res.render('./pages/201814129_1.html',{title:homework1});
});

module.exports = router;
