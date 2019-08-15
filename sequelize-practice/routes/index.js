const express = require('express');
const router = express.Router();
const {User} = require('../models');

router.get('/',(req,res,next)=>{
    res.sendFile('C:\\Users\\dlaxo\\express\\sequelize-practice\\views\\index.html');
    User.findAll()
    .then((users)=>{
        res.json(users);
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    });
});

module.exports = router;
