const sequelize = require('./sequelize');

const Klient = require('../../model/sequelize/Klient');
const Samochod = require('../../model/sequelize/Samochod');
const Polisa = require('../../model/sequelize/Polisa');

module.exports = () => {
    Klient.hasMany(Polisa, {as: 'polisa', foreignKey: {name: 'klient_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Polisa.belongsTo(Klient, {as: 'klient', foreignKey: {name: 'klient_id', allowNull: false} } );
    Samochod.hasMany(Polisa, {as: 'polisa', foreignKey: {name: 'samochod_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Polisa.belongsTo(Samochod, {as: 'samochod', foreignKey: {name: 'samochod_id', allowNull: false} });

    let allKlienci, allSamochody;
    return sequelize
        .sync({force: true})
        .then( () => {
            return Klient.findAll();
        })
        .then(klienci => {
            if( !klienci || klienci.length == 0 ) {
                return Klient.bulkCreate([
                    {nazwaKlienta: 'Lajnert Company', NIP: '8123485312', PESEL: '21312', email: 'lajnert@lajnertcomp.com',
                    telefon:'12323414',   miasto: 'Warszawa', kodPocztowy: '00-001', ulica: 'Koszykowa', numerDomu: '69', numerMieszkania: ''},
                    {nazwaKlienta: 'PJWSTK', NIP: '1124301279', PESEL: '5434543', email: 'dziekanat@pjwstk.edu.pl',
                    telefon:'12323414',   miasto: 'Warszawa', kodPocztowy: '00-123', ulica: 'Koszykowa', numerDomu: '23', numerMieszkania: ''},
                    {nazwaKlienta: 'Toyota Motor Poland', NIP: '7749462263', PESEL: '5645788', email: 'sekretariat@toyota.com',
                    telefon:'12323414',   miasto: 'Warszawa', kodPocztowy: '02-123', ulica: 'Konstruktorska', numerDomu: '7', numerMieszkania: ''},
                ])
                .then( () => {
                    return Klient.findAll();
                });
            } else {
                return klienci;
            }
        })
        .then( klienci => {
            allKlienci = klienci;
            return Samochod.findAll();
        })
        .then( samochody => {
            if( !samochody || samochody.length == 0 ) {
                return Samochod.bulkCreate([

                    {marka: 'Audi', model: 'A3', rokProdukcji: '2020', numerRej: 'WI802KN', vin: '90980912808',
                    wartosc: 195000, waluta: 'PLN', typWartosci: 'Brutto'},
                    {marka: 'Lexus', model: 'IS 200', rokProdukcji: '2020', numerRej: 'WE666WE', vin: '1FTSE34L76DA05729',
                    wartosc: 120500, waluta: 'PLN', typWartosci: 'Brutto'},
                    {marka: 'BMW', model: 'X5', rokProdukcji: '2020', numerRej: 'WI123ER', vin: 'WAULFAFR6EA075193',
                    wartosc: 156500, waluta: 'PLN', typWartosci: 'Brutto'},
                ])
                .then( () => {
                    return Samochod.findAll();
                });
            } else {
                return samochody;
            }
        })
        .then( polisy => {
            allSamochody = polisy;
            return Polisa.findAll();
        })
        .then( polisy => {
            if( !polisy || polisy.length == 0 ) {
                return Polisa.bulkCreate([

                    {klient_id: allKlienci[0]._id, samochod_id: allSamochody[0]._id, numerPolisy: 'PZU00001', ochronaOd: '2020-01-05', ochronaDo: '2021-01-04', tu: 'PZU',
                    ryzyka: 'OC, AC, NNW, Assistance', skladka: 1690, sumaUbezpieczenia: 57987, waluta: 'PLN'},
                    {klient_id: allKlienci[1]._id, samochod_id: allSamochody[1]._id, numerPolisy: 'PZU00002', ochronaOd: '2020-01-12', ochronaDo: '2021-01-21', tu: 'PZU',
                    ryzyka: 'OC, AC, NNW, Assistance', skladka: 2000, sumaUbezpieczenia: 6000, waluta: 'PLN'},
                    {klient_id: allKlienci[2]._id, samochod_id: allSamochody[2]._id, numerPolisy: 'PZU00003', ochronaOd: '2020-01-18', ochronaDo: '2021-01-28', tu: 'PZU',
                    ryzyka: 'OC, AC, NNW, Assistance', skladka: 2500, sumaUbezpieczenia: 7000, waluta: 'PLN'},
                ]);
            } else {
                return polisy;
        }
    });    
};