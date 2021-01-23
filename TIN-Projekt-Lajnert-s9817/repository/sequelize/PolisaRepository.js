const Klient = require('../../model/sequelize/Klient');
const Polisa = require('../../model/sequelize/Polisa');
const Samochod = require('../../model/sequelize/Samochod');

const Sequelize = require('sequelize');

exports.getPolisa = () => {
    return Polisa.findAll({include: [
        {
            model: Klient,
            as: 'klient'
        },
        {
            model: Samochod,
            as: 'samochod'
        }]
    });
};

exports.getPolisaById = (polisaId) => {
    return Polisa.findByPk(polisaId, {include: [
            {
                model: Klient,
                as: 'klient'
            },
            {
                model: Samochod,
                as: 'samochod'
            }]
    });
};

exports.creategetPolisa = (data) => {

    return Polisa.create({

        klient_id: data.klient_id,
        samochod_id: data.samochod_id,
        numerPolisy: data.numerPolisy,
        ochronaOd: data.ochronaOd,
        ochronaDo: data.ochronaDo,
        tu: data.tu,
        ryzyka: data.ryzyka,
        skladka: data.skladka,
        sumaUbezpieczenia: data.sumaUbezpieczenia,
        waluta: data.waluta
    });
};

exports.updategetPolisa = (PolisaId, data) => {
    return Polisa.update(data, {where: {_id: PolisaId }});
}

exports.deletegetPolisa = (PolisaId) => {
    return Polisa.destroy({
        where: { _id: PolisaId }
    });
}

exports.deletegetManyPolisa= (polisaIds) => {
    return Polisa.find({ _id: { [Sequelize.Op.in]: polisaIds }})
}