const express = require('express');
const router = express.Router();

const crawlresult = require('../excrawl.js');

router.get('/', async (req,res,next)=>{
    res.json(crawlresult);
});

module.exports = router;