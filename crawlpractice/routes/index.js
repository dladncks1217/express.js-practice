const express = require('express');
const router = express.Router();
const index1 = require('../crawl/index');
const index2 = require('../crawl/index2');

router.get('/', (req,res,next)=>{  
    index1.then((results)=>{
        const use1 = results;  
        index2.then((results)=>{
            const use2 = results;
            res.render('index',{
                results0:use1,
                results1:use2,
            });
        })
    })
});

module.exports = router;
/*
res.render('index',{
    results0:results,
    results1:results,
});
*/