const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) { // 경로(destination)
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext); 
            done(null, basename + new Date().valueOf() + ext);
        },
    }),
    limits: { fileSize: 20 * 1024 * 1024 },
});

router.get('/',(req,res,next)=>{
    res.render('index');
});

router.post('/image',upload.single('file'), (req,res,next)=>{
    res.send('업로드 성공');
    console.log(req.body.hidden);
});

module.exports = router;