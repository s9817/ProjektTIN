const SamochodRepository = require('../repository/sequelize/SamochodRepository');
const KlientRepository = require('../repository/sequelize/KlientRepository');
const PolisaRepository = require('../repository/sequelize/PolisaRepository');
const Samochod = require('../model/sequelize/Samochod');

exports.showPolisaList = (req, res, next) => {
    PolisaRepository.getPolisa()
        .then(polisy => {
            res.render('pages/polisa/polisy-lista', {
                polisy: polisy,
                navLocation: 'polisa'
            });
        });
}



exports.showPolisaDetails = (req, res, next) => {
    const polisaId = req.params.polId;
    let allPolisa, allKlient;
    PolisaRepository.getPolisaById(polisaId)
    .then(polisa=> {
        allPolisa = polisa;
        res.render('pages/polisa/formularzNowejPolisy', {
            allKlient: allKlient,
            allPolisa: allPolisa,
            polisa: polisa,
            formMode: 'showDetails',
            pageTitle: 'Szczegóły polisy',
            formAction: '',
            navLocation: 'polisa',
            validationErrors: []
        });
    });
}



exports.showAddPolisaForm = (req, res, next) => {
    let allKlient, allSamochod;
    KlientRepository.getKlient()
        .then(klienci => {
            allKlient = klienci;
            return SamochodRepository.getSamochod();
        })
        .then(samochod => {
            allSamochod = samochod;
            res.render('pages/polisa/formularzNowejPolisy', {
                polisa: {},
                formMode: 'createNew',
                allKlient: allKlient,
                allSamochod: allSamochod,
                pageTitle: 'Nowa polisa',
                btnLabel: 'Dodaj polise',
                formAction: '/polisa/add',
                navLocation: 'polisa',
                validationErrors: []
            });
        });
}

exports.showPolisaEdit = (req, res, next) => {
    const polisaId = req.params.polId;
    let allKlient, allSamochod;
    KlientRepository.getKlient()
        .then(klienci => {
            allKlient = klienci;
            return SamochodRepository.getSamochod();
        })
        .then(samochod => {
            allSamochod = samochod;
            return PolisaRepository.getPolisaById(polisaId)
        }).then(polisa => {
            res.render('pages/polisa/formularzNowejPolisy', {
                polisa: polisa,
                allKlient: allKlient,
                allSamochod: allSamochod,
                formMode: 'edit',
                pageTitle: 'Szczegóły polisy',
                formAction: '/polisa/edit',
                navLocation: 'polisa',
                btnLabel: "Edytuj polise",
                validationErrors: []
            });
        });
};



exports.addPolisa = (req, res, next) => {
    const polisaData = { ...req.body };
    PolisaRepository.creategetPolisa(polisaData)
        .then( result => {
            res.redirect('/polisa');
        }).catch(err => {
            let allKlient;
            let allSamochod;
                KlientRepository.getKlient()
                .then(klienci => {
                    allKlient = klienci;
                    return SamochodRepository.getSamochod();
                }).then(samochod =>{
                    allSamochod = samochod
                    console.log(JSON.stringify(polisaData,null,2))
        
                    res.render('pages/polisa/formularzNowejPolisy', {
                        allSamochod: allSamochod,
                        allKlient : allKlient,
                        polisa: polisaData,
                        pageTitle: 'Dodawanie polisy',
                        formMode: 'createNew',
                        btnLabel: 'Dodaj polisa',
                        formAction: '/polisa/add',
                        navLocation: 'polisa',
                        validationErrors: err.errors
                })
        });
    });
};

exports.updatePolisa = (req, res, next) => {
    const polisaId = req.body._id;
    const polisaData = { ...req.body };
    PolisaRepository.updategetPolisa(polisaId, polisaData)
        .then( result => {
            res.redirect('/polisa');
        }).catch(err => {
            res.render('pages/polisa/formularzNowejPolisy', {
            polisa: polisaData,
            pageTitle: 'Edycja polisy',
            formMode: 'edit',
            btnLabel: 'Edytuj polisa',
            formAction: '/polisa/edit',
            navLocation: 'polisa',
            validationErrors: err.errors
        });
    });
};


exports.deletePolisa = (req, res, next) => {
    const polisaId = req.params.polId;
    PolisaRepository.deletegetPolisa(polisaId)
    .then( () => {
        res.redirect('/polisa');
    });
};