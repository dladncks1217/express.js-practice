module.exports = (sequelize,DataTypes)=>(
    sequelize.define('user',{
        name:{
            type:DataTypes.STRING(20),
            allowNull:false,
            unique:true,
        },
        age:{
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        married:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        },
        comment:{
            type:DataTypes.TEXT,
            allowNull:true,
        },
        created_at:{
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue:sequelize.literal('now()'),
        },
    },{
        timestamps:false,
    })
);

//user테이블
//이름, 나이, 결혼여부, 자기소개, 생성일
//zero, 23, false, 안녕하세요, 2019-05-16
//nero, 32, true, 난 폭군이다, 2019-05-15

