const express = require("express");
const router = express.Router();
const responsesController = require("../controllers/responses.controller");

router.get("/", responsesController.getAllResponses);
router.post("/", responsesController.addResponse);
router.get("/:id", responsesController.findResponsesByTopicId);

module.exports = router;
