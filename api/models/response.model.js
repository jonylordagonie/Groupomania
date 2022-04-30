// Include Sequelize module.
const { Sequelize, DataTypes, NOW } = require("sequelize");
const sequelize = require("../database");

const Response = sequelize.define(
  "response",
  {
    author: { type: DataTypes.STRING, allowNull: false, defaultValue: "test"},
    content: { type: DataTypes.STRING, allowNull: false },
    topicId: { type: DataTypes.DECIMAL, allowNull: false, defaultValue: 0},
    date: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "responses",
  }
);

async () => {
  await sequelize.sync();
};

module.exports = Response;
