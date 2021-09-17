module.exports = (sequelize,DataTypes)=>(
    sequelize.define('user',{
        name:{ // 이름
            type:DataTypes.STRING(40),
            allowNull:false,
            unique:true,
        },
        email:{ // 이메일
            type:DataTypes.STRING(40),
            allowNull:false,
            unique:true,
        },
        password:{ // 비밀번호
            type:DataTypes.STRING(100),
            allowNull:false,
        },
    })
);