const Joi = require('joi')

const userValidation = (body) => {
  const UserShema = Joi.object({
    nom: Joi.string().min(3).max(40).trim(),
    prenom: Joi.string().min(3).max(40).trim(),
    email: Joi.string().min(10).max(40).trim(),
    photo: Joi.string().min(15).max(100).trim(),
  });
  return UserShema.validate(body)
}

module.exports = userValidation