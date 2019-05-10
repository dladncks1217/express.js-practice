const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  console.log('인덱스라우터 들어옴');
  res.render('index', { title: 'Express' });
});

module.exports = router;