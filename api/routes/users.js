const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const userController = require('../controllers/user.controller')

router.delete('/:id', userController.DeleteUser)
router.put('/:id', auth, userController.modifyUser)
router.get("/", auth, userController.getAllUsers);
router.get('/isUser', userController.isUser)
router.get("/:id", auth, userController.getUserById);
router.post("/", userController.addUser);
router.post("/login", userController.loggin)

module.exports = router;