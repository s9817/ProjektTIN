const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Klient = sequelize.define('Klient',{
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nazwaKlienta: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        }
    },
    nip: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    pesel: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            }
        }
    },
    telefon: {
        type: Sequelize.STRING,
        allowNull: false
    },
    miasto: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    kodPocztowy: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    ulica: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    numerDomu: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    numerMieszkania: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Klient;