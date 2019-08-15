const express = require('express');
const router = express();
const {User} = require('../models');

router.get('/',(req,res,next)=>{
    User.findAll.then((users)=>{
        res.json(users);
    }).catch((err)=>{
        console.error(err);
        next(err);
    });
});

module.exports = router;