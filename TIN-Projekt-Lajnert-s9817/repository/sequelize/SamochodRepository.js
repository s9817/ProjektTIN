const Sequelize = require('sequelize');

const Klient = require('../../model/sequelize/Klient');
const Polisa = require('../../model/sequelize/Polisa');
const Samochod = require('../../model/sequelize/Samochod');


exports.getSamochod = () => {
    return Samochod.findAll();
};

exports.getSamochodById = (SamochodId) => {
    return Samochod.findByPk(SamochodId,
        {
            include: [{
                model: Polisa,
                as: 'polisa',
                include: [{
                    model: Klient,
                    as: 'klient'
                }]
            }]
        });
};

exports.creategetSamochod = (newSamochodData) => {
    return Samochod.create({
        marka: newSamochodData.marka,
        model: newSamochodData.model,
        rokProdukcji: newSamochodData.rokProdukcji,
        numerRej: newSamochodData.numerRej,
        vin: newSamochodData.vin,
        wartosc: newSamochodData.wartosc,
        waluta: newSamochodData.waluta,
        typWartosci: newSamochodData.typWartosci,
    });
};

exports.updategetSamochod = (SamochodId, SamochodData) => {
    const marka = SamochodData.marka;
    const model = SamochodData.model;
    const rokProdukcji = SamochodData.rokProdukcji;
    const numerRej = SamochodData.numerRej;
    const vin = SamochodData.vin;
    const wartosc = SamochodData.wartosc;
    const waluta = SamochodData.waluta;
    const typWartosci = SamochodData.typWartosci;
    return Samochod.update(SamochodData, {where: {_id: SamochodId }});
};

exports.deletegetSamochod = (SamochodId) => {
    return Samochod.destroy({
        where: { _id: SamochodId }
    });
}; 