'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize'); //시퀄라이즈 모듈
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';//환경 변수이다. 개발 연습중이기 때문에 development로 설정. 후에 배포용으로 쓸 경우 production을 쓰면 된다. 많은 패키지들의 설정이 바뀐다.(개발용, 배포용)
const config = require(__dirname + '/../config/config.json')[env];//시퀄라이즈에 대한 설정 파일을 불러오는 코드이다.
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
