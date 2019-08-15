const express = require('express');
const router = express();
const {User} = require('../models');

router.get('/',(req,res,next)=>{
    User.create({
        
    })
})

module.exports = router;