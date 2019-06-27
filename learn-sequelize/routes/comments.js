const express = require('express');
const {User, Comment} = require('../models');
const router = express.Router();

//GET/comments/:id
router.get('/:id',(req,res,next)=>{
    Comment.findAll({
        include:{
            model:User,
            where: {id:req.params.id },
        }
    })
        .then((comments)=>{
            console.log(comments);
            res.json(comments);
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
});
//POST/comments
router.post('/',(req,res,next)=>{
    Comment.create({
        commenter:req.body.id,
        comment:req.body.comment,
    })
    .then((result)=>{
        console.log(result);
        res.status(201).json(result);
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    });
});
//PATCH/comments/:id
router.patch('/:id',(req,res,next)=>{
    Comment.update({
        comment: req.body.comment,
    },{
        where:{ id: req.params.id },
    })
        .then((result)=>{
            console.log(result);
            res.json(result);
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        });
});
//DELETE/comments/:id
router.delete('/:id',(req,res,next)=>{
    Comment.destroy({
        where:{id: req.params.id},
    })
        .then((result)=>{
        console.log(result);
        res.json(result);
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        });x
});


module.exports = router;
