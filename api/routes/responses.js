const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const responsesController = require("../controllers/responses.controller");

router.get("/", auth, responsesController.getAllResponses);
router.post("/", auth, responsesController.addResponse);
router.get("/:id", auth, responsesController.findResponsesByTopicId);

module.exports = router;
