var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/201814129_1.html', function(req, res, next) {
  res.render('pages/201814129_1.html',{title:homework1});
});

module.exports = router;
