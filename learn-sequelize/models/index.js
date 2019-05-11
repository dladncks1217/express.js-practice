const path = require('path');//path 모듈
const Sequelize = require('sequelize'); //시퀄라이즈 모듈

const env = process.env.NODE_ENV||'development';//환경변수이다. 개발용일경우 'development', 배포용일경우 'production'으로 쓴다. 패키지의 설정이 바뀐다.
const config = require('..config/config.json')[env];//시퀄라이즈에 대한 설정 파일을 불러오는 코드이다.

const sequelize = new Sequelize(config.database, config.username, config.password, config); //이 Sequelize는 사실 생성자이다. 이를 인스턴스화한다. 이 구조는 외우도록 한다.

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
