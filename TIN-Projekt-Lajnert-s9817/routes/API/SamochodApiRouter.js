const express = require('express');
const router = express.Router();

const SamochodApiController = require('../../api/samochodAPI');

router.get('/', SamochodApiController.getSamochod);
router.get('/:samId', SamochodApiController.getSamochodById);
router.post('/', SamochodApiController.creategetSamochod);
router.put('/:samId', SamochodApiController.updategetSamochod);
router.delete('/:samId', SamochodApiController.deletegetSamochod);

module.exports = router;