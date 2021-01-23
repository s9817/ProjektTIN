const express = require('express');
const router = express.Router();
const klientControler = require('../controllers/KlientControllers');


router.get('/', klientControler.showKlientList);
router.get('/add', klientControler.showAddKlientForm);
router.get('/details/:kliId', klientControler.showKlientDetails);
router.get('/edit/:kliId', klientControler.showKlientEdit);
router.post('/add', klientControler.addKlient); 
router.post('/edit', klientControler.updateKlient);
router.get('/delete/:kliId', klientControler.deleteKlient);

module.exports = router;