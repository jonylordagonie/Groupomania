const express = require('express');
const router = express.Router();
const db = require('../database');
const userController = require('../controllers/user.controller')

router.get('/', userController.getAllUsers);

router.post('/', userController.addUser)

router.get("/:id", userController.getUserById);

module.exports = router;