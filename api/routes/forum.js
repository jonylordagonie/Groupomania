const express = require("express");
const router = express.Router();
const forumController = require("../controllers/forum.controller");
const auth = require("../middleware/auth.middleware")
const responsesController =require('../controllers/responses.controller')

router.get("/", forumController.getAllTopics);
router.get("/:id", forumController.getTopicById);
router.put("/", forumController.modifyTopic);
router.post("/", forumController.addTopic);
router.delete("/:id", forumController.DeleteTopic);


module.exports = router;
