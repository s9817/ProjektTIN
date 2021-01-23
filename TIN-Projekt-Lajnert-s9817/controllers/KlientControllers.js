const KlientRepository = require('../repository/sequelize/KlientRepository');

exports.showKlientList = (req, res, next) => {
    KlientRepository.getKlient()
        .then(klienci => {
            res.render('pages/Klient/klienci-lista', {
                klienci: klienci,
                navLocation: 'klient'
            });
        });
}

exports.showAddKlientForm = (req, res, next) => {
    res.render('pages/Klient/formularzNowegoKlient', {
        klient: {},
        pageTitle: 'Nowy klient',
        formMode: 'createNew',
        btnLabel: 'Dodaj klienta',
        formAction: '/klient/add',
        navLocation: 'klient',
        validationErrors: []
    });
}

exports.showKlientDetails = (req, res, next) => {
    const klientId = req.params.kliId;
    console.log(klientId);
    KlientRepository.getKlientById(klientId)

        .then(klient => {
            console.log(JSON.stringify(klient));
            res.render('pages/Klient/formularzNowegoKlient', {
                klient: klient,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły klienta',
                formAction: '',
                navLocation: 'klient',
                validationErrors: []
            });
        });
}

exports.showKlientEdit = (req, res, next) => {
    const KlientId = req.params.kliId;
    KlientRepository.getKlientById(KlientId)
        .then(klient => {
            res.render('pages/Klient/formularzNowegoKlient', {
                klient: klient,
                formMode: 'edit',
                pageTitle: 'Edycja klienta',
                btnLabel: 'Edytuj klienta',
                formAction: '/klient/edit',
                navLocation: 'klient',
                validationErrors: []
            });
        });
};

exports.addKlient = (req, res, next) => {
    const klientData = { ...req.body };
    KlientRepository.creategetKlient(klientData)
        .then( result => {
            res.redirect('/klient');
        }).catch(err => {
            res.render('pages/Klient/formularzNowegoKlient', {
            klient: klientData,
            pageTitle: 'Dodawanie klienta',
            formMode: 'createNew',
            btnLabel: 'Dodaj klienta',
            formAction: '/klient/add',
            navLocation: 'klient',
            validationErrors: err.errors
        });
    });
};
exports.updateKlient = (req, res, next) => {
    const klientId = req.body._id;
    const klientData = { ...req.body };
    KlientRepository.updategetKlient(klientId, klientData)
        .then( result => {
            res.redirect('/klient');
        }).catch(err => {
            res.render('pages/Klient/formularzNowegoKlient', {
            klient: klientData,
            pageTitle: 'Edytuj klienta',
            formMode: 'edit',
            btnLabel: 'Edytuj klienta',
            formAction: '/klient/edit',
            navLocation: 'klient',
            validationErrors: err.errors
        });
    });
};

exports.deleteKlient = (req, res, next) => {
    const klientId = req.params.kliId;
    KlientRepository.deletegetKlient(klientId)
    .then( () => {
        res.redirect('/klient');
    });
};