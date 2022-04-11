// Include Sequelize module.
const Sequelize = require("sequelize");
const sequelize = require("../database");

// Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table
const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nom: { type: Sequelize.STRING, allowNull: false },
  prenom: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  photo: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png",
  }
}, {
  freezeTableName: true,
});

const UserModify = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nom: { type: Sequelize.STRING, allowNull: true },
    prenom: { type: Sequelize.STRING, allowNull: true },
    email: { type: Sequelize.STRING, allowNull: true },
    photo: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue:
        "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png",
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;
module.exports = UserModify;
