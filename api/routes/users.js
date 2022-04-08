const express = require('express');
const router = express.Router();
const db = require('../database');
const userController = require('../controllers/user.controller')

router.get('/', userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post('/', userController.addUser);

module.exports = router;