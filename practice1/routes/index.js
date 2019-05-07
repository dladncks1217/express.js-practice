var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('인덱스라우터 들어옴');
  res.render('index', { title: 'Express' });
});

module.exports = router;