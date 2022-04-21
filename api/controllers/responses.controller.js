const Response = require("../models/response.model");
const responseValidation = require("../utils/responseValidation.utils");

class ResponsesController {
  addResponse = (req, res, next) => {
    const { body } = req;
    const { error } = responseValidation(body);
    if (error) return res.status(401).json(error.details[0].message);
    Response.create({
        ...body,
      })
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