const User = require ('../models/user.model')
const userValidation = require ('../utils/userValidation.utils')

class UserController {
  // getAllUsers = (req, res, next) => {
  //   db.query("SELECT * FROM users", (err, results, fields) => {
  //     !err ? res.json(results) : res.json({ err });
  //   });
  // };

  getAllUsers = (req, res, next) => {
    User.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    })
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((error) => res.status(500).json(error));
  };
  
  getUserById = (req, res, next) => {
    const { id } = req.params
    User.findByPk(id,
    {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    })
      .then((user) => {
        if (!user) return res.status(404).json({ msg: "User not found !" });
        res.status(200).json(user);
      })
      .catch((error) => res.status(500).json(error));
   };
  
  addUser = (req, res, next) => {
    const { body } = req
    const { error } = userValidation(body)
    if (error) return res.status(401).json(error.details[0].message)

    User.create({ ...body })
      .then(() => res.status(201).json({msg: 'user created !'}))
      .catch(error => res.status(500).json(error))
  }

  // addUser = (req, res, next) => {
  //   db.query("INSERT INTO users SET ?", newUser, err, (res) => {
  //     !err ? res.json(results) : res.json({ err });
  //   });
  // };

  // getUserById = (req, res, next) => {
  //   let id = req.params.id;
  //   db.query(`SELECT * FROM users WHERE id = ${id}`, (err, results, fields) => {
  //     !err ? res.json(results) : res.json({ err });
  //   });
  // };
}

module.exports = new UserController();
