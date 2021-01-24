const KlientRepository = require('../repository/sequelize/KlientRepository');
const authUtil = require('../util/authUtils');

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log();
    
    KlientRepository.findByEmail(email)
        .then(klio => {
            if(!klio) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy adres e-mail lub hasło!"
                })
            } else if(authUtil.comparePasswords(password, klio.password) === true){
                req.session.loggedUser = klio;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy adres e-mail lub hasło!"
                })
            }
        })
        
        .catch(err => {
            console.log(err);
        });
};

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
};