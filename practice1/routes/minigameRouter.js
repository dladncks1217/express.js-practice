var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/sleep_minigame', function(req, res, next) {
  res.render('/pages/sleep_minigame',{title:minigame});
});

module.exports = router;
