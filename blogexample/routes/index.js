const express = require('express');
const router = express.Router();
router.get('/',(req,res,next)=>{
    res.render('index');
})
router.post('/example',(req,res,next)=>{
    res.render('example',{
        example:req.body.example,
    })
})
module.exports = router;