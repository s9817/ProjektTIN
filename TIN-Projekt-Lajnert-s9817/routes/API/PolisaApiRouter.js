const express = require('express');
const router = express.Router();

const PolisaApiController = require('../../api/polisaAPI');

router.get('/', PolisaApiController.getPolisa);
router.get('/:polId', PolisaApiController.getPolisaById);
router.post('/', PolisaApiController.creategetPolisa);
router.put('/:polId', PolisaApiController.updategetPolisa);
router.delete('/:polId', PolisaApiController.deletegetPolisa);

module.exports = router;