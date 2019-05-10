var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',(res,req,next)=>{
  console.log('과제1라우터임');
  next();
});
router.get('/', (req, res, next)=> {
  console.log('과제1라우터 들어옴.');
  res.sendFile('/Users/dlaxo/express/practice1/public/pages/201814129_1.html');
  
});


module.exports = router;
