const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Samochod = sequelize.define('Samochod', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    marka: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        }
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        }
    },
    rokProdukcji: {
        type: Sequelize.STRING,
        allowNull: true
    },
    numerRej: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        }
    },
    vin: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        }
    },
    wartosc: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    waluta: {
        type: Sequelize.STRING,
        allowNull: true
    },
    typWartosci: {
        type: Sequelize.STRING,
        allowNull: true
    }
 });

 module.exports = Samochod;