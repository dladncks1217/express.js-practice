const express = require('express');
const router = express.Router();
//GET/comments/:id
router.get('/:id',(req,res,next)=>{
    Comment.findAll()
    .then((comments)=>{
        console.log(comments);
        res.json(comments);
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    })
});
//PATCH/comments/:id
router.patch('/:id',(req,res,next)=>{

});
//DELETE/comments/:id
router.delete('/:id',(req,res,next)=>{

});
//POST/comments
router.post('/',(req,res,next)=>{
    Comment.create({
        commenter:'',
        comment:req.body.comment,
        created_at:req.body.created_at,
    })
    .then((result)=>{
        console.log(result);
        res.status(201).json(result);
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    })
});

module.exports = router;
