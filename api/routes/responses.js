const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const responsesController = require("../controllers/responses.controller");

router.get("/", auth, responsesController.getAllResponses);
router.post("/", auth, responsesController.addResponse);
router.get("/forum/:id", auth, responsesController.findResponsesByTopicId);
router.delete('/:id', auth, responsesController.deleteResponse)
router.get("/:id", auth, responsesController.findResponsesById);

module.exports = router;
