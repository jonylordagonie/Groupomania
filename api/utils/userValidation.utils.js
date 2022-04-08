const Joi = require('joi')

const userValidation = (body) => {
  const UserShema = Joi.object({
    nom: Joi.string().min(3).max(40).trim().required(),
    prenom: Joi.string().min(3).max(40).trim().required(),
    email: Joi.string().min(10).max(40).trim().required(),
    password: Joi.string().min(8).max(40).trim().required(),
    photo: Joi.string().min(15).max(100).trim(),
  });
  return UserShema.validate(body)
}

module.exports = userValidation