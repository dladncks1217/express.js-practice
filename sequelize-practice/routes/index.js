const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile('C:\\Users\\dlaxo\\express\\sequelize-practice\\views\\index.html');
})

module.exports = router;
