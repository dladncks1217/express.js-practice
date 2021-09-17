const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

require('dotenv').config();

router.post('/join',isNotLoggedIn,async(req,res,next)=>{
    const { email, name, password } = req.body;
    try{
        const exUser = await User.findOne({where:{email}});

        if(exUser){
            return res.status(403).json("이미 가입된 이메일입니다.");
        }else{
            const hashedpassword = await bcrypt.hash(password, 12);
            const newUser = await User.create({
                email,
                name,
                password:hashedpassword,
            })
            return res.status(200).json(newUser);
        }
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/login',isNotLoggedIn,(req,res,next)=>{
    passport.authenticate('local', (authError,user,info)=>{
        if(authError){
            console.error(authError);
            return next(authError);
        }
        if(!user){
            return res.status(403).json('아이디 또는 비밀번호가 틀립니다.');
        }
        return req.login(user,(loginError)=>{
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.status(200).json(user);
        })
    })(req,res,next);
})

router.get('/',isLoggedIn,(req,res,next)=>{
    req.logout();
    req.session.destroy();
    res.status(200).json("로그아웃 완료");
})

module.exports = router;