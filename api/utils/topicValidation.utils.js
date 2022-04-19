const Joi = require('joi')

const topicValidation = (body) => {
  const TopicShema = Joi.object({
    title: Joi.string().min(3).max(100).trim(),
    author: Joi.string().min(3).max(255).trim(),
    content: Joi.string().min(3).max(5000).trim(),
    date: Joi.date(),
    responses:Joi.number(),
  });
  return TopicShema.validate(body);
}

module.exports = topicValidation;