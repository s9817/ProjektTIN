const PolisaRepository = require('../repository/sequelize/PolisaRepository');

exports.getPolisa = (req, res, next) => {
    PolisaRepository.getPolisa()
        .then(polisa => {
            res.status(200).json(polisa);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getPolisaById = (req, res, next) => {
    const polId = req.params.polId;
    PolisaRepository.getPolisaById(polId)
        .then(polisa => {
            if(!polisa) {
                res.status(404).json({
                    message: 'polisy z Id: '+polId+' nie znalezione'
                })
            } else {
                res.status(200).json(polisa);
            }
        });
};

exports.creategetPolisa = (req, res, next) => {
    PolisaRepository.creategetPolisa(req.body)
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

exports.updategetPolisa = (req, res, next) => {
    const polId = req.params.polId;
    PolisaRepository.updategetPolisa(polId, req.body)
        .then(result => {
           res.status(200).json({message: 'Polisa zaktualizowany!', polisa: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deletegetPolisa = (req, res, next) => {
    const polId = req.params.polId;
    PolisaRepository.deletegetPolisa(polId)
        .then(result => {
            res.status(200).json({message: 'Polisa usunięte', polisa: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};