const path = require('path');//path 모듈이다.
const Sequelize = require('sequelize');//시퀄라이즈 모듈이다.

const env = process.env.NODE_ENV||'development';
const config = require('../config/config.json')[env]; //환경변수이다. 개발용일경우 'development'로, 배포용일경우 'production'으로 쓴다. 패키지의 설정이 이것으로 바뀐다.
const sequelize = new Sequelize(config.database, config.username,config.password,config);
//이 시퀄라이즈가 사실 생성자다. 이를 인스턴스화하는 코드이다. 구조는 그냥 외우자.
const db = {}; //db객체이다.(이 객체를 앞으로 모듈화 해 사용 할 것이다.)
db.Sequelize = Sequelize;//db객체에 시퀄라이즈 패키지를 넣는다.
db.sequelize = sequelize;//db객체에 시퀄라이즈 인스턴스를 넣는다.

db.User = require('./user')(sequelize,Sequelize);
db.Comment = require('./comment')(sequelize,Sequelize);

db.User.hasMany(db.Comment,{foreignKey:'commenter',sourceKey:'id'});
db.Comment.belongsTo(db.User,{foreignKey:'commenter', targetKey:'id'});
  

module.exports = db;
 
 