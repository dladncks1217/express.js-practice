var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/sleep_minigame', function(req, res, next) {
  console.log('일단들어왔어요');
  res.render('/pages/sleep_minigame.html',{title:minigame});
});

module.exports = router;
