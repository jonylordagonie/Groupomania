// Include Sequelize module.
const { Sequelize, DataTypes, NOW } = require("sequelize");
const sequelize = require("../database");

const Topic = sequelize.define(
  "topic",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false, defaultValue: "test"},
    content: { type: DataTypes.STRING, allowNull: false },
    responses: { type: DataTypes.DECIMAL, allowNull: false, defaultValue: 0 },
    date: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: NOW },
  },
  {
    tableName: "topics",
  }
);

async () => {
  await sequelize.sync();
};

module.exports = Topic;
