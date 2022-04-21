const Joi = require("joi");

const topicValidation = (body) => {
  const TopicShema = Joi.object({
    //author: Joi.string().min(3).max(255).trim(),
    content: Joi.string().min(3).max(500).trim(),
    date: Joi.date(),
    topicId: Joi.number(),
  });
  return TopicShema.validate(body);
};

module.exports = topicValidation;
