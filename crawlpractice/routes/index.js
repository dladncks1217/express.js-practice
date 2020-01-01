const express = require('express');
const router = express.Router();
const index = require('../crawl/index');

router.get('/', (req,res,next)=>{  
    index.then((results)=>{
        res.render('index',{
            results0:results,
        });
    })
});

module.exports = router;