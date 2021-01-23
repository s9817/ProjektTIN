const Joi = require('joi');
const { Model } = require('sequelize/types');

const polisaSchema = Joi.object({
    _id: Joi.number()
        .optional()
        .allow(""),
    numerPolisy: Joi.string()
        .min(5)
        .max(20)
        .required(),
    ochronaOd: Joi.date()
        .required(),
    ochronaDo: Joi.date()
        .required(),
    tu: Joi.string()
        .required(),
    ryzyka: Joi.string()
        .required(),
    skladka: Joi.double()
        .require(),
    sumaUbezpieczenia: Joi.double()
        .require(),
    waluta: Joi.string()
        .required(),
});

module.exports = polisaSchema;