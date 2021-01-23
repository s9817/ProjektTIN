const express = require('express');
const router = express.Router();

const KlientApiController = require('../../api/klientAPI');

router.get('/', KlientApiController.getKlient);
router.get('/:kliId', KlientApiController.getKlientById);
router.post('/', KlientApiController.addKlient);
router.put('/:kliId', KlientApiController.updateKlient);
router.delete('/:klieId', KlientApiController.deleteKlient);

module.exports = router;