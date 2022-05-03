const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const userController = require('../controllers/user.controller')


router.get("/test2/:id", userController.test);
router.get("/test/:id", userController.modifyUser);
router.get("/", auth, userController.getAllUsers);
router.get("/:id", auth, userController.getUserById);
router.post("/", userController.addUser);
router.post("/login", userController.loggin)
router.delete("/:id", auth, userController.DeleteUser);

module.exports = router;