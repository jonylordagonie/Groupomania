const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const userController = require('../controllers/user.controller')

router.get("/",  userController.getAllUsers);
router.get("/:id",  userController.getUserById);
router.post('/', userController.addUser);
router.post("/login", userController.loggin)
router.put("/:id",  userController.modifyUser);
router.delete("/:id", userController.DeleteUser);

module.exports = router;