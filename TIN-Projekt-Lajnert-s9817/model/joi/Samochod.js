const Joi = require('joi');

const carSchema = Joi.object({
    _id: Joi.number()
        .optional()
        .allow(""),
    marka: Joi.string()
        .min(2)
        .max(20)
        .required(),
    model: Joi.string()
        .min(2)
        .max(20)
        .required(),
    numerRej: Joi.string()
        .min(2)
        .max(20)
        .required(),
    vin: Joi.string()
        .min(17)
        .max(17)
        .required(),
});

module.exports = carSchema;