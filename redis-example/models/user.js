module.exports = (sequelize, DataTypes) =>
  sequelize.define("user", {
    email: {
      // 이메일
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
    name: {
      // 이름
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  });
