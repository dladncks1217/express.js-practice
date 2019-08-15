const express = require('express');
const router = express.Router();

router('/',(req,res,next)=>{
    res.render('파일명',{변수설정});
})

module.exports = router;