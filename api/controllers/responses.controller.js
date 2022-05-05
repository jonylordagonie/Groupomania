require("dotenv").config();
const tokenkey = process.env.TOKEN;
const jwt = require("jsonwebtoken");
const Response = require("../models/response.model");
const Topic = require("../models/topic.model");
const responseValidation = require("../utils/responseValidation.utils");
const Sequelize = require("sequelize");

class ResponsesController {
  addResponse = (req, res, next) => {
    const { body } = req;
    const id = req.body.topicId;
    const { error } = responseValidation(body);
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, tokenkey);
    const userId = decodedToken.userId
    const role = decodedToken.role;
    if (role === "admin" || userId == userId) {
      console.log(id)
      if (error) return res.status(401).json(error.details[0].message);
      Response.create({
        ...body,
      });
      Topic.findByPk(id)
        .then((topic) => {
          if (!topic) return res.status(404).json({ msg: "Topic not found !" });
          topic.responses += 1;
          topic.save();
        })
        .catch((error) => res.status(500).json({ error }))
        .then(() => res.status(201).json({ msg: "Response created !" }))
        .catch((error) => res.status(500).json(error));
    } else {
      res.status(401).json({ msg: "Unauthorized request" });
    }
  };

  getAllResponses = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, tokenkey);
    const userId = decodedToken.userId
    const role = decodedToken.role;
    if (role === "admin" || userId == userId) {
      Response.findAll({
        attributes: {
          exclude: ["updatedAt"],
          include: [
            [
              Sequelize.fn(
                "DATE_FORMAT",
                Sequelize.col("date"),
                "Le %d/%m/%Y à %Hh%i"
              ),
              "date",
            ],
          ],
        },
      })
        .then((responses) => {
          res.status(200).json(responses);
        })
        .catch((error) => res.status(500).json(error));
    } else {
      res.status(401).json({ msg: "Unauthorized request" });
    }
  };

  findResponsesByTopicId = (req, res, next) => {
    const { id } = req.params;
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, tokenkey);
    const userId = decodedToken.userId
    const role = decodedToken.role;
    if (role === "admin" || userId == userId) {
      Response.findAll({
        where: {
          topicID: id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
          include: [
            [
              Sequelize.fn(
                "DATE_FORMAT",
                Sequelize.col("date"),
                "Le %d/%m/%Y à %Hh%i"
              ),
              "date",
            ],
          ],
        },
      })
        .then((responses) => {
          res.status(200).json(responses);
        })
        .catch((error) => res.status(500).json(error));
    } else {
      res.status(401).json({ msg: "Unauthorized request" });
    }
  };

  findResponsesById = (req, res, next) => {
    const { id } = req.params;
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, tokenkey);
    const role = decodedToken.role;
    if (role === "admin") {
      Response.findAll({
        where: {
          id: id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
          include: [
            [
              Sequelize.fn(
                "DATE_FORMAT",
                Sequelize.col("date"),
                "Le %d/%m/%Y à %Hh%i"
              ),
              "date",
            ],
          ],
        },
      })
        .then((responses) => {
          res.status(200).json(responses);
        })
        .catch((error) => res.status(500).json(error));
    } else {
      res.status(401).json({ msg: "Unauthorized request" });
    }
  };

  deleteResponse = (req, res, next) => {
    const { id } = req.params;
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, tokenkey);
    const role = decodedToken.role;
    let test = 0
    Response.findAll({
      where: {
        id: id,
      }
    })
      .then((responses) => {
        test = responses[0].dataValues.topicId
        if (role === "admin") {
          console.log(test);
          Response.destroy({ where: { id: id } });
          Topic.findByPk(test)
            .then((topic) => {
              if (!topic)
                return res.status(404).json({ msg: "Topic not found !" });
              topic.responses -= 1;
              topic.save();
            })
            .catch((error) => res.status(500).json(error))
          .then(() => res.status(201).json({ msg: "Response deleted !" }))
          .catch((error) => res.status(500).json(error));
        } else {
          res.status(401).json({ msg: "Unauthorized request" });
        }
      })
      .catch((error) => res.status(500).json(error));
  };
}

module.exports = new ResponsesController();
