var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('c:\\Users\\dlaxo\\express\\practice-ajax\\views\\index.html');
});

module.exports = router; 
