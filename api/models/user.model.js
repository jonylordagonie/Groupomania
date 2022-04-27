// Include Sequelize module.
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define(
  "user",
  {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: { type: DataTypes.STRING, allowNull: false },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png",
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
      defaultValue: "user",
    },
  },
  {
    tableName: "users",
  }
);

(async () => { await sequelize.sync() });

module.exports = User;
