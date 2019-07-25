module.exports = (sequelize,DataTypes)=>(
    sequelize.define('user',{
        comment:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        created_at:{
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue:sequelize.literal('now()'),
        },
    }, {
        timestamps:false,
        underscored:true,
    })
);



//comment테이블
//작성자, 댓글내용, 작성일
//zero, 안녕하세요, 2019-05-16
//nero, 으하하하, 2019-05-15
 