const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const userController = require('../controllers/user.controller')

router.put('/:id', userController.modifyUser)
router.get("/", auth, userController.getAllUsers);
router.get('/isUser', userController.isUser)
router.get("/:id", auth, userController.getUserById);
router.delete("/:id", auth, userController.DeleteUser);
router.post("/", userController.addUser);
router.post("/login", userController.loggin)

module.exports = router;