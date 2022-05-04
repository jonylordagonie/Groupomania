require("dotenv").config();
const tokenkey = process.env.TOKEN;
const jwt = require("jsonwebtoken");
const Topic = require("../models/topic.model");
const Sequelize = require("sequelize")
const topicValidation = require("../utils/topicValidation.utils");

class ForumController {
  getAllTopics = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, tokenkey);
    const userId = decodedToken.id
    const role = decodedToken.role;
    if (role === "admin" || userId == userId) {
      Topic.findAll({
        attributes: {
          include: [
            [
              Sequelize.fn(
                "DATE_FORMAT",
                Sequelize.col("date"),
                "Le %d/%m/%Y à %Hh%i"
              ),
              "date",
            ],
            [
              Sequelize.fn(
                "DATE_FORMAT",
                Sequelize.col("updatedAt"),
                "Le %d/%m/%Y à %Hh%i"
              ),
              "updatedAt",
            ],
          ],
          //exclude: ["createdAt", "updatedAt"],
        },
      })
        .then((topics) => {
          res.status(200).json(topics);
        })
        .catch((error) => res.status(500).json(error));
    } else {
      res.status(401).json({ msg: "Unauthorized request" });
    }
  };

  getTopicById = (req, res, next) => {
    const { id } = req.params;
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, tokenkey);
    const userId = decodedToken.id
    const role = decodedToken.role;
    if (role === "admin" || userId == userId) {
      Topic.findByPk(id, {
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
        .then((topic) => {
          if (!topic) return res.status(404).json({ msg: "topic not found !" });
          res.status(200).json(topic);
        })
        .catch((error) => res.status(500).json(error));
    } else {
      res.status(401).json({ msg: "Unauthorized request" });
    }
  };

  addTopic = (req, res, next) => {
    const { body } = req;
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, tokenkey);
    const userId = decodedToken.id
    const role = decodedToken.role;
    if (role === "admin" || userId == userId) {
      const { error } = topicValidation(body);
      if (error) return res.status(401).json(error.details[0].message);
      Topic.create({
        ...body,
      })
        .then(() => res.status(201).json({ msg: "Topic created !" }))
        .catch((error) => res.status(500).json(error));
    } else {
      res.status(401).json({ msg: "Unauthorized request" });
    }
  };

  DeleteTopic = (req, res, next) => {
    const { id } = req.params;
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, tokenkey);
    const role = decodedToken.role;
    if (role === "admin") {
      Topic.destroy({ where: { id: id } })
        .then((ressource) => {
          if (ressource === 0)
            return res.status(404).json({ msg: "Not found !" });
          res.status(200).json({ msg: "Message delted !" });
        })
        .catch((error) => res.status(500).json(error));
    } else {
      res.status(401).json({ msg: "Unauthorized request" });
    }
  };
}

module.exports = new ForumController();
