const Response = require("../models/response.model");
const Topic = require("../models/topic.model")
const responseValidation = require("../utils/responseValidation.utils");

class ResponsesController {
  addResponse = (req, res, next) => {
    const { body } = req;
    const id = req.body.topicId;
    console.log(id)
    const { error } = responseValidation(body);
    if (error) return res.status(401).json(error.details[0].message);
    Response.create({
      ...body,
    })
    Topic.findByPk(id)
      .then((topic) => {
        if (!topic) return res.status(404).json({ msg: "Topic not found !" });
        topic.responses += 1;
        topic
          .save()
      })
      .catch((error) => res.status(500).json({ error }))
    .then(() => res.status(201).json({ msg: "Response created !" }))
    .catch((error) => res.status(500).json(error));
  };

  getAllResponses = (req, res, next) => {
    Response.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    })
      .then((responses) => {
        res.status(200).json(responses);
      })
      .catch((error) => res.status(500).json(error));
  };

  findResponsesByTopicId = (req, res, next) => {
    const { id } = req.params;
    Response.findAll({
      where: {
        topicID: id
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    })
      .then((responses) => {
        res.status(200).json(responses);
      })
      .catch((error) => res.status(500).json(error));
  };
}

module.exports = new ResponsesController();