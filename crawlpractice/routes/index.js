const express = require('express');
const router = express.Router();
const index = require('../crawl/index');

router.get('/',(req,res,next)=>{    
    res.render('index',{
        results0:index,
    });
});

module.exports = router;