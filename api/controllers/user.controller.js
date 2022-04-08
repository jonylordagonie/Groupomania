const express = require("express");
const User = require ('../models/user.model')
const db = require("../database");

class UserController {
  // getAllUsers = (req, res, next) => {
  //   db.query("SELECT * FROM users", (err, results, fields) => {
  //     !err ? res.json(results) : res.json({ err });
  //   });
  // };

  getAllUsers = User.findAll();

  addUser = (req, res, next) => {
    db.query("INSERT INTO users SET ?", newUser, err, (res) => {
      !err ? res.json(results) : res.json({ err });
    });
  };

  getUserById = (req, res, next) => {
    let id = req.params.id;
    db.query(`SELECT * FROM users WHERE id = ${id}`, (err, results, fields) => {
      !err ? res.json(results) : res.json({ err });
    });
  };
}

module.exports = new UserController();
