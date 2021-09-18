const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = (passport)=>{
    passport.use(new LocalStrategy({   
        usernameField:'email', 
        passwordField:'password', 
    }, async (email,password,done)=>{ 
        try{
            const exUser = await User.findOne({where:{email}}); 
            if(exUser){ 
                const result = await bcrypt.compare(password,exUser.password); 
                if(result){
                    done(null,exUser);
                }else{
                    done(null,false,console.log("비밀번호가 일치하지 않습니다."));
                }
            }else{
                done(null,false,console.log('가입되지 않은 회원입니다.'));
            }
        }catch(err){
            console.error(err);
            done(err);
        }
    }));
}