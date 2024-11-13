const Joi = require("joi");

const schemaValidation = Joi.object({
  name: Joi.string().min(3).required(),
  last_name: Joi.string().min(3).allow(null, ""),
  phone: Joi.string().required().messages({
    "string.pattern.base": "número inválido",
  }),
  carrera:Joi.string().required(),
  email: Joi.string()
    .required()
    .pattern(
      new RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    )
    .messages({
      "string.pattern.base": "Correo Inválido",
    }),
  captcha:Joi.string()
});

module.exports = { schemaValidation };
