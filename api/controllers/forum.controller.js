const sequelize = require("../database");
const Topic = require("../models/topic.model");
const topicValidation = require("../utils/topicValidation.utils");

class ForumController {
  getAllTopics = (req, res, next) => {
    Topic.findAll({
      attributes: {
        //exclude: ["createdAt", "updatedAt"],
      },
    })
      .then((topics) => {
        res.status(200).json(topics);
      })
      .catch((error) => res.status(500).json(error));
  };

  getTopicById = (req, res, next) => {
    const { id } = req.params;
    Topic.findByPk(id, {
      attributes: {
        exclude: ["updatedAt"],
      },
    })
      .then((topic) => {
        if (!topic) return res.status(404).json({ msg: "topic not found !" });
        res.status(200).json(topic);
      })
      .catch((error) => res.status(500).json(error));
  };

  addTopic = (req, res, next) => {
    const { body } = req;
    const { error } = topicValidation(body);
    if (error) return res.status(401).json(error.details[0].message);
    Topic.create({
      ...body,
    })
      .then(() => res.status(201).json({ msg: "Topic created !" }))
      .catch((error) => res.status(500).json(error));
  };

  DeleteTopic = (req, res, next) => {
    const { id } = req.params;
    Topic.destroy({ where: { id: id } })
      .then((ressource) => {
        if (ressource === 0)
          return res.status(404).json({ msg: "Not found !" });
        res.status(200).json({ msg: "Topic delted !" });
      })
      .catch((error) => res.status(500).json(error));
  };

  modifyTopic = (req, res, next) => {
    console.log('test')
    const { id } = req.params;
    Topic.findByPk(id)
        .then((topic) => {
          if (!topic) return res.status(404).json({ msg: "Topic not found !" });
          topic.responses += 1;
          topic
            .save()
            .then(() => res.status(201).json({ msg: "ajout d'une réponse !" }));
        })
      .catch((error) => {console.log(error), res.status(500).json({error}) });
  };
}

module.exports = new ForumController();
