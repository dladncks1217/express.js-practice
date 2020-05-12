const express = require('express');
const router = express.Router();

const crawlresult = require('../excrawl.js');

router.get('/', async (req,res,next)=>{
    let a = await crawlresult;
    res.json(a);

});

module.exports = router;