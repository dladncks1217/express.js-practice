const express = require('express');
const router = express();
const {User} = require('../models');

router.post('/',(req,res,next)=>{
    User.create({
        name: req.body.name,
        age:req.body.age,
        birthday:req.body.birthday,  
    })
    .then((result)=>{
        console.log(result);
        res.status(201).json(result);
    })
    .catch((error)=>{
        console.error(error);
        next(error);
    });
});

module.exports = router;