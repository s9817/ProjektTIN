const Joi = require('joi');

const klientSchema = Joi.object({
    _id: Joi.number()
        .optional()
        .allow(""),
    nazwaKlienta: Joi.string()
        .min(2)
        .max(50)
        .required(),
    email: Joi.string()
        .email()
        .required()
});

module.exports = klientSchema;