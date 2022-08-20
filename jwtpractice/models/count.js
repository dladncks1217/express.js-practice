module.exports = (sequelize, DataTypes) =>
  sequelize.define("count", {
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
