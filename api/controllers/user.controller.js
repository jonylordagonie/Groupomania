const User = require('../models/user.model')
const UserModify = require("../models/user.model");
const bcrypt = require ("bcrypt")
const userValidation = require('../utils/userValidation.utils')
const userModifyValidation = require('../utils/userModifyValidation.utils')

class UserController {
  getAllUsers = (req, res, next) => {
    User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
    })
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((error) => res.status(500).json(error));
  };

  getUserById = (req, res, next) => {
    const { id } = req.params;
    User.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
    })
      .then((user) => {
        if (!user) return res.status(404).json({ msg: "User not found !" });
        res.status(200).json(user);
      })
      .catch((error) => res.status(500).json(error));
  };

  modifyUser = (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    const { error } = userModifyValidation(body);

    UserModify.findByPk(id)
      .then((user) => {
        if (!user) return res.status(404).json({ msg: "User not found !" });
        if (error) return res.status(401).json(error.details[0].message);
        user.nom = body.nom;
        user.prenom = body.prenom;
        user.email = body.email;
        user
          .save()
          .then(() =>
            res.status(201).json({ msg: "utilisateur modifier avec succès !" })
          );
      })
      .catch((error) => res.status(500).json(error));
  };

  addUser = (req, res, next) => {
    const { body } = req;
    const { error } = userValidation(body);
    if (error) {
      return res.status(401).json(error.details[0].message);
    } else {
      bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
          User.create({
            ...body,
            password: hash
          })
            .then(() => res.status(201).json({ msg: "user created !" }))
            .catch((error) => res.status(500).json(error));
        })
    }
  };

  DeleteUser = (req, res, next) => {
    const { id } = req.params;
    User.destroy({ where: { id: id } })
      .then(ressource => {
        if (ressource === 0) return res.status(404).json({ msg: "Not found !" })
        res.status(200).json({msg : "User delted !"})
      })
      .catch((error) => res.status(500).json(error));
  };
        
}

module.exports = new UserController();
