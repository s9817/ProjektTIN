const express = require('express');
const router = express.Router();
const SamochodControler = require('../controllers/SamochodControllers');

router.get('/', SamochodControler.showSamochodList);
router.get('/add', SamochodControler.showAddSamochodForm);
router.get('/details/:samId', SamochodControler.showSamochodDetails);
router.get('/edit/:samId', SamochodControler.showSamochodEdit);
router.post('/add', SamochodControler.addSamochod); 
router.post('/edit', SamochodControler.updateSamochod);
router.get('/delete/:samId', SamochodControler.deleteSamochod);

module.exports = router;