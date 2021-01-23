const SamochodRepository = require('../repository/sequelize/SamochodRepository');

exports.showSamochodList = (req, res, next) => {
    SamochodRepository.getSamochod()
        .then(samochody => {
            res.render('pages/Samochod/samochody-lista', {
                samochody: samochody,
                navLocation: 'samochod'
            });
        });
}

exports.showAddSamochodForm = (req, res, next) => {
    res.render('pages/Samochod/formularzNowegoSamochodu', {
        samochod: {},
        pageTitle: 'Nowy samochod',
        formMode: 'createNew',
        btnLabel: 'Dodaj samochod',
        formAction: '/samochod/add',
        navLocation: 'samochody',
        validationErrors: []
    });
}

exports.showSamochodDetails = (req, res, next) => {
    const SamochodId = req.params.samId;
    SamochodRepository.getSamochodById(SamochodId)
        .then(samochod => {
            res.render('pages/Samochod/formularzNowegoSamochodu', {
                samochod: samochod,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły samochodu',
                formAction: '',
                navLocation: 'samochod',
                validationErrors: []
            });
        });
}

exports.showSamochodEdit = (req, res, next) => {
    const SamochodtId = req.params.samId;
    SamochodRepository.getSamochodById(SamochodtId)
        .then(samochod => {
            res.render('pages/Samochod/formularzNowegoSamochodu', {
                samochod: samochod,
                formMode: 'edit',
                pageTitle: 'Edycja samochodu',
                btnLabel: 'Edytuj samochod',
                formAction: '/samochod/edit',
                navLocation: 'samochod',
                validationErrors: []
            });
        });
};

exports.addSamochod = (req, res, next) => {
    const SamochodData = { ...req.body };
    SamochodRepository.creategetSamochod(SamochodData)
        .then( result => {
            res.redirect('/samochod');
        }).catch(err => {
            res.render('pages/Samochod/formularzNowegoSamochodu', {
            Samochod: SamochodData,
            pageTitle: 'Dodawanie samochodu',
            formMode: 'createNew',
            btnLabel: 'Dodaj samochod',
            formAction: '/samochod/add',
            navLocation: 'samochod',
            validationErrors: err.errors
        });
    });
};

exports.updateSamochod = (req, res, next) => {
    const SamochodId = req.body._id;
    const samochodData = { ...req.body };
    SamochodRepository.updategetSamochod(SamochodId, samochodData)
        .then( result => {
            res.redirect('/samochod');
        }).catch(err => {
            res.render('pages/Samochod/formularzNowegoSamochodu', {
            samochod: samochodData,
            pageTitle: 'Edytuj samochod',
            formMode: 'edit',
            btnLabel: 'Edytuj samochod',
            formAction: '/samochod/edit',
            navLocation: 'samochod',
            validationErrors: err.errors
        });
    });
};

exports.deleteSamochod  = (req, res, next) => {
    const SamochodId = req.params.samId;
    SamochodRepository.deletegetSamochod(SamochodId)
    .then( () => {
        res.redirect('/samochod');
    });
};