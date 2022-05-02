const express = require("express");
const router = express.Router();
const forumController = require("../controllers/forum.controller");
const auth = require("../middleware/auth.middleware")

router.get("/", forumController.getAllTopics);
router.get("/:id", auth, forumController.getTopicById);
router.post("/", auth, forumController.addTopic);
router.delete("/:id", auth, forumController.DeleteTopic);


module.exports = router;
