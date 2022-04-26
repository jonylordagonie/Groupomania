const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const userController = require('../controllers/user.controller')

router.get("/",  userController.getAllUsers);
router.get("/:id", auth, userController.getUserById);
router.post('/', userController.addUser);
router.post("/login", userController.loggin)
router.put("/:id", auth, userController.modifyUser);
router.delete("/:id", auth, userController.DeleteUser);

module.exports = router;