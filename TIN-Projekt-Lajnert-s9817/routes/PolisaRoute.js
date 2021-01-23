const express = require('express');
const router = express.Router();
const PolisaControler = require('../controllers/PolisaControllers');

router.get('/', PolisaControler.showPolisaList);
router.get('/add', PolisaControler.showAddPolisaForm);
router.get('/details/:polId', PolisaControler.showPolisaDetails);
router.get('/edit/:polId', PolisaControler.showPolisaEdit);
router.post('/add', PolisaControler.addPolisa); 
router.post('/edit', PolisaControler.updatePolisa);
router.get('/delete/:polId', PolisaControler.deletePolisa);

module.exports = router;
