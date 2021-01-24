const Klient = require('../../model/sequelize/Klient');
const Polisa = require('../../model/sequelize/Polisa');
const Samochod = require('../../model/sequelize/Samochod');
const klientSchema = require('../../model/joi/Klient');

exports.getKlient = () => {
    return Klient.findAll();
};

exports.getKlientById = (klientId) => {
    return Klient.findByPk(klientId,
        {
            include: [{
                model: Polisa,
                as: 'polisa',
                include: [{
                    model: Samochod,
                    as: 'samochod'
                }]
            }]
        });
};

exports.creategetKlient = (newKlientData) => {
    const vRes = klientSchema.validate(newKlientData, { abortEarly: false} );
    return Klient.create({
        nazwaKlienta: newKlientData.nazwaKlienta,
        nip: newKlientData.nip,
        pesel: newKlientData.pesel,
        email: newKlientData.email,
        telefon: newKlientData.telefon,
        miasto: newKlientData.miasto,
        kodPocztowy: newKlientData.kodPocztowy,
        ulica: newKlientData.ulica,
        numerDomu: newKlientData.numerDomu,
        numerMieszkania: newKlientData.numerMieszkania
    });
};

exports.updategetKlient = (klientId, klientData) => {
    const nazwaKlienta = klientData.nazwaKlienta;
    const nip = klientData.nip;
    const pesel = klientData.pesel;
    const email = klientData.email;
    const telefon = klientData.telefon;
    const miasto = klientData.miasto;
    const kodPocztowy = klientData.kodPocztowy;
    const ulica = klientData.ulica;
    const numerDomu = klientData.numerDomu;
    const numerMieszkania = klientData.numerMieszkania;
    
    return Klient.update(klientData, {where: {_id: klientId }});
};

exports.deletegetKlient = (klientId) => {
    return Klient.destroy({
        where: { _id: klientId }
    });

};

exports.findByEmail = (email) => {
    return Klient.findOne({
        where: {email: email}
    });
}