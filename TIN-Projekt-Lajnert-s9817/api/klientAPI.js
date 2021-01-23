const KlientRepository = require('../repository/sequelize/KlientRepository');

exports.getKlient = (req, res, next) => {
    KlientRepository.getKlient()
        .then(klienci => {
            res.status(200).json(klienci);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getKlientById = (req, res, next) => {
    const kliId = req.params.kliId;
    KlientRepository.getKlientById(kliId)
        .then(klienci => {
            if(!klienci) {
                res.status(404).json({
                    message: 'Klient z Id: '+kliId+' nie znaleziony'
                })
            } else {
                res.status(200).json(klienci);
            }
        });
};

exports.addKlient = (req, res, next) => {
    KlientRepository.addKlient(req.body)
        .then(newObj => {
           res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateKlient = (req, res, next) => {
    const kliId = req.params.kliId;
    KlientRepository.updateKlient(kliId, req.body)
        .then(result => {
           res.status(200).json({message: 'Klient zaktualizowany!', Klient: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteKlient = (req, res, next) => {
    const kliId = req.params.kliId;
    KlientRepository.deleteKlient(kliId)
        .then(result => {
            res.status(200).json({message: 'Klient usunięty', Klient: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};