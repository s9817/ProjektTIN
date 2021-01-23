const SamochodRepository = require('../repository/sequelize/SamochodRepository');

exports.getSamochod = (req, res, next) => {
    SamochodRepository.getSamochod()
        .then(Samochoy => {
            res.status(200).json(Samochoy);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getSamochodById = (req, res, next) => {
    const samId = req.params.samId;
    SamochodRepository.getSamochodById(samId)
        .then(Samochoy => {
            if(!Samochoy) {
                res.status(404).json({
                    message: 'Samochod z Id: '+samId+' nie znaleziony'
                })
            } else {
                res.status(200).json(Samochoy);
            }
        });
};

exports.creategetSamochod = (req, res, next) => {
    SamochodRepository.creategetSamochod(req.body)
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

exports.updategetSamochod = (req, res, next) => {
    const samId = req.params.samId;
    SamochodRepository.updategetSamochod(samId, req.body)
        .then(result => {
           res.status(200).json({message: 'Samochod zaktualizowany!', Samochod: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deletegetSamochod = (req, res, next) => {
    const samId = req.params.samId;
    SamochodRepository.deletegetSamochod(samId)
        .then(result => {
            res.status(200).json({message: 'Samochod usunięty', Samochod: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};